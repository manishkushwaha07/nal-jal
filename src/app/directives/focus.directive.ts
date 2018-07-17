import { Directive, OnInit, Input, ElementRef, Renderer } from "@angular/core";

@Directive({ selector: '[ngb-focus]' })
export class FocusDirective{

    constructor(private hostElement: ElementRef, private renderer: Renderer) { }

    @Input("elementId")
    set setElementId(elementId : string){
        const element = document.getElementById(elementId);
        if(element){
            console.log("Focusing on element");
            this.renderer.invokeElementMethod(element, 'focus');
        }
    }
}