import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MinhaLibModule } from 'minha-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MinhaLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
