import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToastrModule, provideToastr } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule, 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    //Toastr

    ToastrModule.forRoot(),
  ],
  providers: [
    provideAnimationsAsync(), // required animations providers

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
