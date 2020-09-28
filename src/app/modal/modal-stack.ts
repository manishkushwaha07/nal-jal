import { Injectable, ComponentRef, ApplicationRef, Injector, Inject, 
    RendererFactory2, ComponentFactoryResolver, TemplateRef } from "@angular/core";
import { ModalActiveRef } from "./modal-active-ref";
import { ModalBackdropComponent } from "./modal-backdrop.component";
import { ModalComponent } from "./modal.component";
import { ModalRef } from "./modal-ref";
import { ModalOptions } from "./modal-option";
import { Subject } from "rxjs";
import { DOCUMENT } from "@angular/platform-browser";
import { ScrollBar } from "./util-scrollbar";
import { isDefined, isString } from "./util.util";
import { ContentRef } from "./util-popup";
import { ngbFocusTrap } from "./util-focus-trap";

@Injectable({providedIn: 'root'})
export class ModalStack {
    private _activeWindowCmptHasChanged = new Subject();
    private _ariaHiddenValues: Map<Element, string> = new Map();
    private _backdropAttributes = ['backdropClass'];
    private _modalRefs: ModalRef[] = [];
    private _windowAttributes =
        ['ariaLabelledBy', 'backdrop', 'centered', 'keyboard', 'scrollable', 'size', 'windowClass'];
    private _windowCmpts: ComponentRef<ModalComponent>[] = [];

    constructor(private _applicationRef: ApplicationRef, private _injector: Injector, 
        @Inject(DOCUMENT) private _document: any, private _scrollBar: ScrollBar,
         private _rendererFactory: RendererFactory2) {
    // Trap focus on active WindowCmpt
    this._activeWindowCmptHasChanged.subscribe(() => {
        if (this._windowCmpts.length) {
        const activeWindowCmpt = this._windowCmpts[this._windowCmpts.length - 1];
        ngbFocusTrap(activeWindowCmpt.location.nativeElement, this._activeWindowCmptHasChanged);
        this._revertAriaHidden();
        this._setAriaHidden(activeWindowCmpt.location.nativeElement);
        }
    });
    }

    open(moduleCFR: ComponentFactoryResolver, contentInjector: Injector, content: any, options): ModalRef {
    const containerEl = isDefined(options.container) ? this._document.querySelector(options.container) : this._document.body;
    const renderer = this._rendererFactory.createRenderer(null, null);

    const revertPaddingForScrollBar = this._scrollBar.compensate();
    const removeBodyClass = () => {
        if (!this._modalRefs.length) {
        renderer.removeClass(this._document.body, 'modal-open');
        this._revertAriaHidden();
        }
    };

    if (!containerEl) {
        throw new Error(`The specified modal container "${options.container || 'body'}" was not found in the DOM.`);
    }

    const activeModal = new ModalActiveRef();
    const contentRef = this._getContentRef(moduleCFR, options.injector || contentInjector, content, activeModal, options);

    let backdropCmptRef: ComponentRef<ModalBackdropComponent> = options.backdrop !== false ? this._attachBackdrop(moduleCFR, containerEl) : null;
    let windowCmptRef: ComponentRef<ModalComponent> = this._attachWindowComponent(moduleCFR, containerEl, contentRef);
    let ngbModalRef: ModalRef = new ModalRef(windowCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);

    this._registerModalRef(ngbModalRef);
    this._registerWindowCmpt(windowCmptRef);
    ngbModalRef.result.then(revertPaddingForScrollBar, revertPaddingForScrollBar);
    ngbModalRef.result.then(removeBodyClass, removeBodyClass);
    activeModal.close = (result: any) => { ngbModalRef.close(result); };
    activeModal.dismiss = (reason: any) => { ngbModalRef.dismiss(reason); };

    this._applyWindowOptions(windowCmptRef.instance, options);
    if (this._modalRefs.length === 1) {
        renderer.addClass(this._document.body, 'modal-open');
    }

    if (backdropCmptRef && backdropCmptRef.instance) {
        this._applyBackdropOptions(backdropCmptRef.instance, options);
    }
    return ngbModalRef;
    }

    dismissAll(reason?: any) { this._modalRefs.forEach(ngbModalRef => ngbModalRef.dismiss(reason)); }

    hasOpenModals(): boolean { return this._modalRefs.length > 0; }

    private _attachBackdrop(moduleCFR: ComponentFactoryResolver, containerEl: any): ComponentRef<ModalBackdropComponent> {
    let backdropFactory = moduleCFR.resolveComponentFactory(ModalBackdropComponent);
    let backdropCmptRef = backdropFactory.create(this._injector);
    this._applicationRef.attachView(backdropCmptRef.hostView);
    containerEl.appendChild(backdropCmptRef.location.nativeElement);
    return backdropCmptRef;
    }

    private _attachWindowComponent(moduleCFR: ComponentFactoryResolver, containerEl: any, contentRef: any):ComponentRef<ModalComponent> {
    let windowFactory = moduleCFR.resolveComponentFactory(ModalComponent);
    let windowCmptRef = windowFactory.create(this._injector, contentRef.nodes);
    this._applicationRef.attachView(windowCmptRef.hostView);
    containerEl.appendChild(windowCmptRef.location.nativeElement);
    return windowCmptRef;
    }

    private _applyWindowOptions(windowInstance: ModalComponent, options: Object): void {
    this._windowAttributes.forEach((optionName: string) => {
        if (isDefined(options[optionName])) {
        windowInstance[optionName] = options[optionName];
        }
    });
    }

    private _applyBackdropOptions(backdropInstance: ModalBackdropComponent, options: Object): void {
    this._backdropAttributes.forEach((optionName: string) => {
        if (isDefined(options[optionName])) {
        backdropInstance[optionName] = options[optionName];
        }
    });
    }

    private _getContentRef(moduleCFR: ComponentFactoryResolver, contentInjector: Injector, content: any, activeModal: ModalActiveRef,options: ModalOptions): ContentRef {
    console.log(content);
    if (!content) {
        console.log("if is not content");
        return new ContentRef([]);
    } else if (content instanceof TemplateRef) {
        console.log("it is a templateRef");
        return this._createFromTemplateRef(content, activeModal);
    } else if (isString(content)) {
        console.log("if is string");
        return this._createFromString(content);
    } else {
        console.log("if is component");
        return this._createFromComponent(moduleCFR, contentInjector, content, activeModal, options);
    }
    }

    private _createFromTemplateRef(content: TemplateRef<any>, activeModal: ModalActiveRef): ContentRef {
    const context = {
        $implicit: activeModal,
        close(result) { activeModal.close(result); },
        dismiss(reason) { activeModal.dismiss(reason); }
    };
    const viewRef = content.createEmbeddedView(context);
    this._applicationRef.attachView(viewRef);
    return new ContentRef([viewRef.rootNodes], viewRef);
    }

    private _createFromString(content: string): ContentRef {
    const component = this._document.createTextNode(`${content}`);
    return new ContentRef([[component]]);
    }

    private _createFromComponent(moduleCFR: ComponentFactoryResolver, contentInjector: Injector, content: any, context: ModalActiveRef,options: ModalOptions): ContentRef {
    const contentCmptFactory = moduleCFR.resolveComponentFactory(content);
    const modalContentInjector =Injector.create({providers: [{provide: ModalActiveRef, useValue: context}], parent: contentInjector});
    const componentRef = contentCmptFactory.create(modalContentInjector);
    const componentNativeEl = componentRef.location.nativeElement;
    if (options.scrollable) {
        (componentNativeEl as HTMLElement).classList.add('component-host-scrollable');
    }
    this._applicationRef.attachView(componentRef.hostView);
    // FIXME: we should here get rid of the component nativeElement
    // and use `[Array.from(componentNativeEl.childNodes)]` instead and remove the above CSS class.
    return new ContentRef([[componentNativeEl]], componentRef.hostView, componentRef);
    }

    private _setAriaHidden(element: Element) {
    const parent = element.parentElement;
    if (parent && element !== this._document.body) {
        Array.from(parent.children).forEach(sibling => {
        if (sibling !== element && sibling.nodeName !== 'SCRIPT') {
            this._ariaHiddenValues.set(sibling, sibling.getAttribute('aria-hidden'));
            sibling.setAttribute('aria-hidden', 'true');
        }
        });

        this._setAriaHidden(parent);
    }
    }

    private _revertAriaHidden() {
    this._ariaHiddenValues.forEach((value, element) => {
        if (value) {
        element.setAttribute('aria-hidden', value);
        } else {
        element.removeAttribute('aria-hidden');
        }
    });
    this._ariaHiddenValues.clear();
    }

    private _registerModalRef(ngbModalRef: ModalRef) {
    const unregisterModalRef = () => {
        const index = this._modalRefs.indexOf(ngbModalRef);
        if (index > -1) {
        this._modalRefs.splice(index, 1);
        }
    };
    this._modalRefs.push(ngbModalRef);
    ngbModalRef.result.then(unregisterModalRef, unregisterModalRef);
    }

    private _registerWindowCmpt(ngbWindowCmpt: ComponentRef<ModalComponent>) {
    this._windowCmpts.push(ngbWindowCmpt);
    this._activeWindowCmptHasChanged.next();

    ngbWindowCmpt.onDestroy(() => {
        const index = this._windowCmpts.indexOf(ngbWindowCmpt);
        if (index > -1) {
        this._windowCmpts.splice(index, 1);
        this._activeWindowCmptHasChanged.next();
        }
    });
    }
}