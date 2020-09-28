import { Injector } from "@angular/core";

export interface ModalOptions {
    ariaLabelledBy?: string;
    backdrop?: boolean | 'static';
    centered?: boolean;
    keyboard?: boolean;
    scrollable?: boolean;
    size?: 'sm' | 'lg' | 'xl';
    windowClass?: string;
    backdropClass?: string;
    /**
     * A selector specifying the element all new modal windows should be appended to.
     *
     * If not specified, will be `body`.
     */
    container?: string;
  
    /**
     * The `Injector` to use for modal content.
     */
    injector?: Injector;
    /**
     * Callback right before the modal will be dismissed.
     *
     * If this function returns:
     * * `false`
     * * a promise resolved with `false`
     * * a promise that is rejected
     *
     * then the modal won't be dismissed.
     */
    beforeDismiss?: () => boolean | Promise<boolean>;
  
  }