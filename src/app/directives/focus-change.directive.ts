
//https://stackoverflow.com/questions/1009808/

import { Directive, Input, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector: '[focusChange]',
})

export class FocusChangeDirective {

    @Input() focusChange: boolean = false;
    
    constructor(private element: ElementRef) { }

    @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {

        // let focussableElements = "a:not([disabled]), button:not([disabled]), input[type=text]:not([disabled]), [tabindex]:not([disabled]):not([tabindex='-1'])";
        
        if(event.keyCode ==13 && this.focusChange){
                let focusableElements = document.querySelectorAll("input:not([disabled]):not([readonly]), select:not([disabled]):not([readonly]),"+
                " a:not([disabled]):not([readonly]), button:not([disabled]):not([readonly]), [tabindex]:not([disabled]):not([tabindex='-1']):not([readonly]), textarea:not([disabled]):not([readonly])")
                let index = Array.prototype.indexOf.call(focusableElements, document.activeElement)
                if (event.shiftKey)
                    this.focus(focusableElements, index - 1)
                else
                    this.focus(focusableElements, index + 1)

                event.preventDefault()
                
        }

    }

    focus(elements, index) {
        if (elements[index])
            elements[index].focus()
    }
}