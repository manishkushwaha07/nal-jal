import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nal-jal-modal-backdrop',
  template: '',
  host:
    {'[class]': '"modal-backdrop fade show" + (backdropClass ? " " + backdropClass : "")', 
    'style': 'z-index: 1050'}
})

export class ModalBackdropComponent{
  
  @Input() backdropClass: string;
}
