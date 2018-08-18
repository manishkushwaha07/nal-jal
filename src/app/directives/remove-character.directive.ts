import { Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: 'input[type=text]'
})
export class RemoveCharacterDirective {
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  @HostListener('change', ['$event']) onInputChange(e: KeyboardEvent) {
    let inputValue = (<HTMLSelectElement>e.target).value;
    let trimValue = inputValue.replace(/[\r?\n|\r/"]/g,'');
    console.log(trimValue);
    this.ngModelChange.emit(trimValue);
  }
}
