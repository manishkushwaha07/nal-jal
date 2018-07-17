import { Directive, EventEmitter, HostListener, Output, ElementRef, Renderer } from '@angular/core';
import { NgControl } from "@angular/forms";

@Directive({
  selector: '.lowercase'
})
export class LowercaseDirective {
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef, private renderer: Renderer) {}
    
  @HostListener('input', ['$event']) onInputChange($event) {
    this.ngModelChange.emit($event.target.value.toLowerCase());
  }
// https://stackoverflow.com/questions/35826325/
// https://stackoverflow.com/questions/40682717/

}