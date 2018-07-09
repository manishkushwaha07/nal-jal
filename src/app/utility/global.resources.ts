import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { NgForm } from '@angular/forms';
import { GlobalConstants } from 'src/app/utility/global.constants';

@Injectable()
export class GlobalResources {
    
    setPristine(element : NgForm){
        if(element != null){
            element.form.markAsPristine();
        }
    }

    setUntouched(element : NgForm){
        if(element != null){
            element.form.markAsUntouched();
        }
    }

    updateValueAndValidity(element : NgForm){
        if(element != null){
            element.form.updateValueAndValidity();
        }
    }

    resetValidateForm(ngForm:NgForm){
        this.setPristine(ngForm);
        this.setUntouched(ngForm);
        this.updateValueAndValidity(ngForm);
    }

    validateForm(ngForm: NgForm): boolean{
        if(ngForm != null && ngForm != undefined){
            if(ngForm.invalid){
                Object.keys(ngForm.controls).forEach(control => {
                ngForm.form.get(control).markAsDirty();
                ngForm.form.get(control).markAsTouched();
                });
                return false;
            }else{
                return true;
            }
        }else{
            console.log("form received as null.");
            return false;
        }
    }
    
    parseNumberIntoFloat(number){
        return Number.parseFloat(number);
    }

    parseNumberIntoInteger(number){
        return Number.parseInt(number);
    }

    getDateFromDatetimestamp(dateWithTimeStamp){
        return (new Date(dateWithTimeStamp)).toISOString().slice(0,10);
    }

    loadConvertKWtoHP(loadInKW){
        let load = this.parseNumberIntoFloat(loadInKW);
        let loadInHP = (load / 0.746).toFixed(3);
        return this.parseNumberIntoFloat(loadInHP);
    }

    loadConvertHPtoKW(loadInHP){
        let load = this.parseNumberIntoFloat(loadInHP);
        let loadInKW = (load * 0.746).toFixed(3);
        return this.parseNumberIntoFloat(loadInKW);
    }

  handleError (error: Response | any, componentName : string, methodName :string) {
    let errorMessage: string = "Some internal error. Please try agian...";
    console.log(error);
    try{
      switch (error.status) {
        case 400:
        case 402:
        case 404:
        case 412:
        case 417:{
          if(error.error.errorMessage){
              errorMessage = error.error.errorMessage;
              break;
          }else{
              errorMessage = "Erorr-" + error.status +" inside " + componentName +"-" + methodName;
              break;
          }
        }
        case 500:
          errorMessage = GlobalConstants.INTERNAL_SERVER_ERROR_500;
          break;
        
        default:
          errorMessage = GlobalConstants.ERROR_MESSAGE_1 + componentName + "-" + methodName;
      }
    } catch (exception) {
      console.log(exception);
      errorMessage = GlobalConstants.ERROR_MESSAGE_3 + componentName + "-" + methodName;
    }
    return errorMessage;
  }
    
}
