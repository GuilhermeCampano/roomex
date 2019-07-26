import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterRoutingModule } from './enter-routing.module';
import { RegisterContainerComponent } from './register-container/register-container.component';


@NgModule({
  declarations: [RegisterContainerComponent],
  imports: [
    CommonModule,
    EnterRoutingModule
  ]
})
export class EnterModule { }
