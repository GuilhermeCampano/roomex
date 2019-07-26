import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EnterRoutingModule } from './enter-routing.module';
import { RegisterContainerComponent } from './components';

@NgModule({
  declarations: [RegisterContainerComponent],
  imports: [
    CommonModule,
    EnterRoutingModule,
    ReactiveFormsModule
  ]
})
export class EnterModule { }
