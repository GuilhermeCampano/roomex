import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ThankYouContainerComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: ThankYouContainerComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThankyouRoutingModule {}
