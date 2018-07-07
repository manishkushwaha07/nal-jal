import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/app/app.rounting';
import { LoginModule } from './modules/login/login.module';
import { HeaderComponentModule } from 'src/app/components/header/header-component.module';
import { FooterComponentModule } from 'src/app/components/footer/footer-component.module';
import { ServicesModule } from 'src/app/services/services.module';
import { AuthorizationServiceModule } from 'src/app/services/authorization-service/authorization-service.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { GlobalConfiguration } from './config/global.config';
import { LoginServiceModule } from './services/login/login-service.module';
import { HomeModule } from 'src/app/modules/home/home.module';
import { LoaderComponentModule } from 'src/app/components/loader/loader-component.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    HomeModule,
    DashboardModule,
    HeaderComponentModule,
    FooterComponentModule,
    LoaderComponentModule,
    ServicesModule,
    AuthorizationServiceModule,
    LoginServiceModule,
    AppRoutingModule,
    ],
  providers: [GlobalConfiguration],
  bootstrap: [AppComponent]
})
export class AppModule { }
