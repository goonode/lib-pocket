import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PocketDataBComponent } from './pocket-data-b.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';



@NgModule( {
  declarations: [ PocketDataBComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
  ],
  exports: [ PocketDataBComponent ],
} )
export class PocketDataBModule { }
