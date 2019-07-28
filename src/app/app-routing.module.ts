import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'enter',
    loadChildren: () => import('./+enter/enter.module').then(mod => mod.EnterModule)
  },
  // @TODO add a route guard to prevent user get directly at "thankyou" page
  {
    path: 'thankyou',
    loadChildren: () => import('./+thankyou/thankyou.module').then(mod => mod.ThankyouModule)
  },
  {
    path: '**',
    redirectTo: 'enter'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
