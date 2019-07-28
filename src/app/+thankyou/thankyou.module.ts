import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThankYouContainerComponent } from './components';
import { ReviewRegisterComponent } from './components/review-register/review-register.component';
import { ThankyouRoutingModule } from './thankyou-routing.module';

@NgModule({
  declarations: [ThankYouContainerComponent, ReviewRegisterComponent],
  imports: [CommonModule, ThankyouRoutingModule]
})
export class ThankyouModule {}
