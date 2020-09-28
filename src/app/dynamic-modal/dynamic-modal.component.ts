import { Component, OnInit, AfterViewInit, OnDestroy, Type, ComponentRef, ViewChild, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { DynamicModalDirective } from './dynamic-modal.directive';

@Component({
  selector: 'nal-jal-dynamic-modal',
  templateUrl: './dynamic-modal.component.html',
  styleUrls: ['./dynamic-modal.component.css']
})
export class DynamicModalComponent implements OnInit, AfterViewInit, OnDestroy {
  componentRef: ComponentRef<any>
  childComponentType: Type<any>
  // add this:
  @ViewChild(DynamicModalDirective) insertionPoint: DynamicModalDirective

  // and this:
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
     private cd: ChangeDetectorRef) {}

  ngOnInit(){}

  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  loadChildComponent(componentType: Type<any>) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    let viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
}

  onOverlayClicked(evt: MouseEvent) {
    console.log(evt);
    // close the dialog
  }

  onDialogClicked(evt: MouseEvent) {
    console.log(evt);
    evt.stopPropagation()
  }

}