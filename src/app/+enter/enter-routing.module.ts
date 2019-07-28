import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterContainerComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: RegisterContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterRoutingModule {}
