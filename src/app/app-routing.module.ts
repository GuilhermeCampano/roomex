import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'enter',
    loadChildren: () => import('./+enter/enter.module').then(mod => mod.EnterModule)
  },
  {
    path: 'thankyou',
    loadChildren: () => import('./+thankyou/thankyou.module').then(mod => mod.ThankyouModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
