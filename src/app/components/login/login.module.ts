import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoaderComponentModule } from '../../components/loader/loader-component.module';
import { ErrorsComponentModule } from 'app/components/errors/errors-component.module';
import { DirectiveModule } from '../../directives/directive.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderComponentModule,
    ErrorsComponentModule,
    DirectiveModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [NgbActiveModal],
})
export class LoginModule { }
