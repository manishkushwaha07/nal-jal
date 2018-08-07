import { OnInit, OnDestroy, Directive, SkipSelf, Optional, Attribute, Injector, Input } from '@angular/core';
import { NgForm, FormArray, FormGroup, AbstractControl } from '@angular/forms';

const resolvedPromise = Promise.resolve(null);

@Directive({
  selector: '[nalJalNestedForm]'
})
export class NestedFormDirective implements OnInit, OnDestroy {


  private static readonly FORM_ARRAY_NAME = 'CHILD_FORMS';

  private currentForm: FormGroup;


  @Input()
  private formGroup: FormGroup;

  constructor(@SkipSelf()
              @Optional()
              private parentForm: NestedFormDirective,
              private injector: Injector,
              @Attribute('rootNestedForm') private isRoot) {

  }

  ngOnInit() {
    if (!this.currentForm) {
      // NOTE: at this point both NgForm and ReactiveFrom should be available
      this.executePostponed(() => this.resolveAndRegister());
    }
  }

  ngOnDestroy() {
    if(this.parentForm){
      this.executePostponed(() => this.parentForm.removeControl(this.currentForm));
    }
  }

  public registerNestedForm(control: AbstractControl): void {
    // NOTE: prevent circular reference (adding to itself)
    if (control === this.currentForm) {
      throw new Error('Trying to add itself! Nestable form can be added only on parent "NgForm" or "FormGroup".');
    }
    (<FormArray>this.currentForm.get(NestedFormDirective.FORM_ARRAY_NAME)).push(control);
  }

  public removeControl(control: AbstractControl): void {
    const array = (<FormArray>this.currentForm.get(NestedFormDirective.FORM_ARRAY_NAME));
    const idx = array.controls.indexOf(control);
    array.removeAt(idx);
  }

  private resolveAndRegister(): void {
    this.currentForm = this.resolveCurrentForm();
    this.currentForm.addControl(NestedFormDirective.FORM_ARRAY_NAME, new FormArray([]));
    this.registerToParent();
  }

  private resolveCurrentForm(): FormGroup {
    // NOTE: template-driven or model-driven => determine by the formGroup input
    return this.formGroup ? this.formGroup : this.injector.get(NgForm).control;
  }

  private registerToParent(): void {
    if (this.parentForm != null && !this.isRoot) {
      this.parentForm.registerNestedForm(this.currentForm);
    }
  }

  private executePostponed(callback: () => void): void {
    resolvedPromise.then(() => callback());
  }

}
