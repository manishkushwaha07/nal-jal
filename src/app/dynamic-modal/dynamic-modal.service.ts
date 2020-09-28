import { Injectable, ComponentRef, ComponentFactoryResolver, 
  ApplicationRef, Injector, EmbeddedViewRef, Type } from '@angular/core';
import { DynamicModalModule } from './dynamic-modal.module';
import { DynamicModalComponent } from './dynamic-modal.component';

@Injectable({
  providedIn: DynamicModalModule,
})
export class DynamicModalService {

  dynamicModalComponentRef: ComponentRef<DynamicModalComponent>

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) {}

  appendDynamicModalComponentToBody(){
    //Dynamically instantiating the dialog component using its factory:
    //Angular is creating a factory for each component when building. At least when using ahead of time compilation (AOT).
    //To get the factory of our DialogComponent we can use the ComponentFactoryResolver provided by angular. 
    //This service is using the type of the component to look up the factory.
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicModalComponent);
    //Once we have the factory, we can use it to create an instance of our DynamicModalComponent.
    const componentRef = componentFactory.create(this.injector);
    //Afterward, we need to attach the new component to the angular component tree (which is separate from the DOM). 
    //We do so by using the ApplicationRef we requested.
    this.applicationRef.attachView(componentRef.hostView);
    //Last but not least, we get the root DOM-element of our DynamicModalComponent and attach it to the HTML-body.
    //Also, we assign the componentRef to our property.
    const domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElement);
    this.dynamicModalComponentRef = componentRef;
  }

  //We also need a way to remove the component once the dialog is closed.
  //For that, we are creating a method called “removeDynamicModalComponentFromBody”. 
  //Basically, it is undoing the steps we did before.
  removeDynamicModalComponentFromBody() {
    this.applicationRef.detachView(this.dynamicModalComponentRef.hostView);
    this.dynamicModalComponentRef.destroy();
  }

  //Now that we are able to add the dialog to the DOM,
  // all we need to do to open the dialog is to call our method.
  public open(componentType: Type<any>) {
    this.appendDynamicModalComponentToBody();
    //Because empty dialogs are quite useless, we will enable our dialog to show any other component, next.
    //Doing that, we will pass the Type of the component we want to spawn inside of our dialog to the services “open”-method.
    this.dynamicModalComponentRef.instance.childComponentType = componentType;
  }

  close(){
    this.removeDynamicModalComponentFromBody();
  }
}