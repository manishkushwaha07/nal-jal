import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[nalJalDynamicModal]'
})
export class DynamicModalDirective {

  constructor(public viewContainerRef: ViewContainerRef) {}

}
