import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './homepage/signup/signup.component';
import { SigninComponent } from './homepage/signin/signin.component';
import { ContactusComponent } from './homepage/contactus/contactus.component';
import { AboutusComponent } from './homepage/aboutus/aboutus.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ContactusComponent,
    AboutusComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
