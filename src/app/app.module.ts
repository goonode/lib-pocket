import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PocketDataContainerModule } from './basic-usage/pocket-data-container/pocket-data-container.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule( {
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PocketDataContainerModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
