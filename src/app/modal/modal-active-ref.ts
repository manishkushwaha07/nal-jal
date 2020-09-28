
/**
 * A reference to the currently opened (active) modal.
 *
 * Instances of this class can be injected into your component passed as modal content.
 * So you can `.close()` or `.dismiss()` the modal window from your component.
 */
export class ModalActiveRef {
    /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbMobalRef.result` promise will be resolved with the provided value.
     */
    close(result?: any): void {}
  
    /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `ModalRef.result` promise will be rejected with the provided value.
     */
    dismiss(reason?: any): void {}
  }