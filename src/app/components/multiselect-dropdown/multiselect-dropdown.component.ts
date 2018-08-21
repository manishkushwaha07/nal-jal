import { Component, OnInit, Input, forwardRef, ElementRef, Renderer } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { EqualPipe } from 'app/pipes/equal.pipe';


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
  localHeader: string;
  isOpen: boolean = false;
  _items: Array<any>;
  
 // ControlValueAccessor Interface and mutator
  private _onChange = (_: any) => {};
  private _onTouched = () => {};
  constructor(private _elRef: ElementRef, private _renderer: Renderer, private _equalPipe: EqualPipe) { }

  ngOnInit() {
  }

  @Input("items")
  set setItems(items : any){
    this.items = items;
    console.log(this.items);
  }

  @Input() header: string = "Select some stuff";
  @Input() selectedHeader: string = "options selected";

  select(item: any) {
    item.checked = !item.checked;
    this._selectedItems = this._equalPipe.transform(this._items, {checked: true});
    this.setHeaderText();
    this._onChange(this._selectedItems);
  }

  setHeaderText() {
    this.localHeader = this.header;
    var isArray = this._selectedItems instanceof Array;
    if (isArray && this._selectedItems.length > 1) {
      this.localHeader = this._selectedItems.length + ' ' + this.selectedHeader;
    } else if (isArray && this._selectedItems.length === 1) {
      this.localHeader = this._selectedItems[0].label;
    }
    console.log("Set header text " + this.localHeader);
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
