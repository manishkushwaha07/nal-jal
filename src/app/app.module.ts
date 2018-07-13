import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/app/app.rounting';
import { LoginModule } from './modules/login/login.module';
import { HeaderComponentModule } from 'src/app/components/header/header-component.module';
import { FooterComponentModule } from 'src/app/components/footer/footer-component.module';
import { ServicesModule } from 'src/app/services/services.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalConfiguration } from './config/global.config';
import { HomeModule } from 'src/app/modules/home/home.module';
import { AuthorizationInterceptor } from 'src/app/interceptors/authorization.interceptor';
import { GlobalResources } from 'src/app/utility/global.resources';
import { GlobalConstants } from 'src/app/utility/global.constants';
import { CanActivateAuthGuard } from 'src/app/guards/can-activate.authguard';

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

