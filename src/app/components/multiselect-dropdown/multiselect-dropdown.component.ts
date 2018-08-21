import { Component, OnInit, Input, forwardRef, ElementRef, Renderer } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


const MULTISELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MultiselectDropdownComponent),
  multi: true
};

@Component({
  selector: 'nal-jal-multiselect-dropdown',
  templateUrl: './multiselect-dropdown.component.html',
  styleUrls: ['./multiselect-dropdown.component.css'],
  providers: [MULTISELECT_VALUE_ACCESSOR]
})
export class MultiselectDropdownComponent implements OnInit, ControlValueAccessor  {
  
  items: Array<any>;
  _selectedItems: Array<any>;
  
 // ControlValueAccessor Interface and mutator
  private _onChange = (_: any) => {};
  private _onTouched = () => {};
  constructor(private _elRef: ElementRef, private _renderer: Renderer) { }

  ngOnInit() {
  }

  @Input("items")
  set setItems(items : any){
    this.items = items;
    console.log(this.items);
  }

  writeValue(value: any) {
    console.log('writing value ' + value);
   if (value !== undefined) {
      this._selectedItems = value;
    } else  {
      this._selectedItems = [];
    }
  }

  registerOnChange(fn: (value: any) => any): void { this._onChange = fn; console.log(fn); }
  registerOnTouched(fn: () => any): void { this._onTouched = fn; }
 
  setDisabledState(isDisabled: boolean): void {
    this._renderer.setElementProperty(this._elRef.nativeElement, 'disabled', isDisabled);
//    if (this.isOpen()) {
//      this._cRef.instance.setDisabledState(isDisabled);
//    }
  }
}
