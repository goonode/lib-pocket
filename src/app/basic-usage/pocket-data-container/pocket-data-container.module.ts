import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PocketDataContainerComponent } from './pocket-data-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PocketDataAModule } from '../pocket-data-a/pocket-data-a.module';
import { PocketDataBModule } from '../pocket-data-b/pocket-data-b.module';



@NgModule( {
  declarations: [ PocketDataContainerComponent ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PocketDataAModule,
    PocketDataBModule,
  ],
  exports: [
  ]
} )
export class PocketDataContainerModule { }
