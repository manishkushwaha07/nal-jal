import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from 'app/app.component';
import { HomeModule } from 'app/modules/home/home.module';
import { HeaderComponentModule } from 'app/components/header/header-component.module';
import { FooterComponentModule } from 'app/components/footer/footer-component.module';
import { ServicesModule } from 'app/services/services.module';
import { AppRoutingModule } from 'app/app.rounting';
import { GlobalConfiguration } from 'app/config/global.config';
import { GlobalResources } from 'app/utility/global.resources';
import { GlobalConstants } from 'app/utility/global.constants';
import { CanActivateAuthGuard } from 'app/guards/can-activate.authguard';
import { AuthorizationInterceptor } from 'app/interceptors/authorization.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    HomeModule,
    HeaderComponentModule,
    FooterComponentModule,
    ServicesModule,
    AppRoutingModule
  ],
  providers: [
    GlobalConfiguration,
    GlobalResources,
    GlobalConstants,
    CanActivateAuthGuard,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthorizationInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

