import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PocketDataAComponent } from './pocket-data-a.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';



@NgModule( {
  declarations: [ PocketDataAComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
  ],
  exports: [ PocketDataAComponent ],
} )
export class PocketDataAModule { }
