import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplandingpageComponent } from './applandingpage/applandingpage.component';

const routes: Routes = [
  { path: '', component: ApplandingpageComponent },
  { path: 'smartest', loadChildren: () => import('./smarttest/smarttest.module').then(m => m.SmarttestModule) },
  { path: 'apigen', loadChildren: () => import('./apigen/apigen.module').then(m => m.ApigenModule) },
  { path: 'performance', loadChildren: () => import('./performance/performance.module').then(m => m.PerformanceModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
