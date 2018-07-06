import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/app/app.rounting';
import { LoginModule } from './modules/login/login.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponentModule } from 'src/app/components/header/header-component.module';
import { FooterComponentModule } from 'src/app/components/footer/footer-component.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    HeaderComponentModule,
    FooterComponentModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
