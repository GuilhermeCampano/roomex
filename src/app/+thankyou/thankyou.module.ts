import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThankyouRoutingModule } from './thankyou-routing.module';
import { ThankYouContainerComponent } from './components';


@NgModule({
  declarations: [ThankYouContainerComponent],
  imports: [
    CommonModule,
    ThankyouRoutingModule
  ]
})
export class ThankyouModule { }
