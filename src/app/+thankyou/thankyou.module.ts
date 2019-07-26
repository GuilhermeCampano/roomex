import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThankyouRoutingModule } from './thankyou-routing.module';
import { ThankYouContainerComponent } from './components';
import { ReviewRegisterComponent } from './components/review-register/review-register.component';


@NgModule({
  declarations: [ThankYouContainerComponent, ReviewRegisterComponent],
  imports: [
    CommonModule,
    ThankyouRoutingModule
  ]
})
export class ThankyouModule { }
