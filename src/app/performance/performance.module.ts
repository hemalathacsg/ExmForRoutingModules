import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRoutingModule } from './performance-routing.module';
import { PerformancehomeComponent } from './performancehome/performancehome.component';
import { PerformanceproductsComponent } from './performanceproducts/performanceproducts.component';


@NgModule({
  declarations: [
    PerformancehomeComponent,
    PerformanceproductsComponent
  ],
  imports: [
    CommonModule,
    PerformanceRoutingModule
  ]
})
export class PerformanceModule { }
