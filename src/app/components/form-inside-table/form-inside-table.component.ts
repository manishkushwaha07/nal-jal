import { Component, OnInit } from '@angular/core';
import { GlobalResources } from '../../utility/global.resources';
import { DynamicModalService } from '../../dynamic-modal/dynamic-modal.service';
import { NestedFormComponent } from '@nal-jal-components/tutorial/nested-form-sample/nested-form.component';
import { ModalService } from '../../modal/modal.module';
import { LoginModalComponent } from '../../modals/login-modal/login-modal.component';
import { LoginComponent } from '@nal-jal-components/login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'nal-jal-form-inside-table',
  templateUrl: './form-inside-table.component.html',
  styleUrls: ['./form-inside-table.component.css']
})
export class FormInsideTableComponent implements OnInit {
  formInput1: any;
  formInput2: any;
  objectArray: any;
  constructor(public globalResources: GlobalResources,
  private dynamicModalService: DynamicModalService, private modalService: ModalService) { }

  ngOnInit() {
    this.objectArray = [];
    this.objectArray.push({a:"manish"});
    this.objectArray.push({b:"mishika"});
  }

  submitClicked(subittedForm){
    console.log(subittedForm);
    if(this.globalResources.validateForm(subittedForm)){
      console.log(this.formInput1, this.formInput2);
    }
  }

  opneModal(templatRef){
    // this.dynamicModalService.open(FormInsideTableComponent);
    this.modalService.open(LoginModalComponent);
  }

}
