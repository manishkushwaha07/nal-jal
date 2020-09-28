import { Component, OnInit, ViewEncapsulation, AfterViewInit, OnDestroy, 
  Input, Output, EventEmitter, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { ModalDismissReasons } from './modal-dismiss-reasons';

@Component({
  selector: 'nal-jal-modal',
  
  host: {
    '[class]': '"modal fade show d-block" + (windowClass ? " " + windowClass : "")',
    'role': 'dialog',
    'tabindex': '-1',
    '(keyup.esc)': 'escKey($event)',
    '(click)': 'backdropClick($event)',
    '[attr.aria-modal]': 'true',
    '[attr.aria-labelledby]': 'ariaLabelledBy',
  },
  template: `<div [class]="'modal-dialog' + (size ? ' modal-' + size:'') + 
    (centered ? ' modal-dialog-centered' : '') + (scrollable ? ' modal-dialog-scrollable' : '')" 
    role="document">
    <div class="modal-content">
      <ng-content></ng-content>
    </div>
    </div>`,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modal.component.css'],
  
})
export class ModalComponent implements OnInit, AfterViewInit, OnDestroy {
private _elWithFocus: Element;  // element that is focused prior to modal opening

@Input() ariaLabelledBy: string;
@Input() backdrop: boolean | string = true;
@Input() centered: string;
@Input() keyboard = true;
@Input() scrollable: string;
@Input() size: string;
@Input() windowClass: string;

@Output('dismiss') dismissEvent = new EventEmitter();

constructor(@Inject(DOCUMENT) private _document: any, private _elRef: ElementRef<HTMLElement>) {}

backdropClick($event): void {
if (this.backdrop === true && this._elRef.nativeElement === $event.target) {
  this.dismiss(ModalDismissReasons.BACKDROP_CLICK);
}
}

escKey($event): void {
if (this.keyboard && !$event.defaultPrevented) {
  this.dismiss(ModalDismissReasons.ESC);
}
}

dismiss(reason): void { this.dismissEvent.emit(reason); }

ngOnInit() { this._elWithFocus = this._document.activeElement; }

ngAfterViewInit() {
if (!this._elRef.nativeElement.contains(document.activeElement)) {
  const autoFocusable = this._elRef.nativeElement.querySelector(`[ngbAutofocus]`) as HTMLElement;
  const elementToFocus = autoFocusable || this._elRef.nativeElement;
  elementToFocus.focus();
}
}

ngOnDestroy() {
const body = this._document.body;
const elWithFocus = this._elWithFocus;

let elementToFocus;
if (elWithFocus && elWithFocus['focus'] && body.contains(elWithFocus)) {
  elementToFocus = elWithFocus;
} else {
  elementToFocus = body;
}
elementToFocus.focus();
this._elWithFocus = null;
}
}