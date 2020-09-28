import { Injectable } from "@angular/core";
import { ModalOptions } from "./modal-option";


  /**
   * A configuration service for the [`NgbModal`](#/components/modal/api#NgbModal) service.
   *
   * You can inject this service, typically in your root component, and customize the values of its properties in
   * order to provide default values for all modals used in the application.
  *
  * @since 3.1.0
  */
  @Injectable({providedIn: 'root'})
  export class ModalConfig implements ModalOptions {
    backdrop: boolean | 'static' = true;
    keyboard = true;
  }