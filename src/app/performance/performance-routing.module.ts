import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerformancehomeComponent } from './performancehome/performancehome.component';
import { PerformanceproductsComponent } from './performanceproducts/performanceproducts.component';

const routes: Routes = [
  { path: '', component: PerformancehomeComponent },
  { path: 'products', component: PerformanceproductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceRoutingModule { }
