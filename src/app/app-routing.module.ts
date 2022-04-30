import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { PocketDataContainerComponent } from './basic-usage/pocket-data-container/pocket-data-container.component';


const routes: Routes = [
  { path: '', component: PocketDataContainerComponent, },
  { path: 'basic-usage', component: PocketDataContainerComponent },
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
