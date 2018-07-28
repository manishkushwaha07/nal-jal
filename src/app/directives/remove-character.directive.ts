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
  // @HostListener('change', ['$event']) onInputChange(event) {
  //   let inputValue = event.target.value;
  //   let trimValue = inputValue.replace(/[\r?\n|\r/"/']/g,'');
  //   this.ngModelChange.emit(trimValue);
  // }

  // @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
  //   e.preventDefault();
  // }

  // @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
  //   e.preventDefault();
  // }

  // @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
  //   e.preventDefault();
  // }

}
