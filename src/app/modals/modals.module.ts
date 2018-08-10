import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponentModule } from '../components/loader/loader-component.module';
import { ErrorsComponentModule } from '../components/errors/errors-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderComponentModule,
    ErrorsComponentModule
  ],
  declarations: [ModalComponent, LoginModalComponent]
})
export class ModalsModule { }
