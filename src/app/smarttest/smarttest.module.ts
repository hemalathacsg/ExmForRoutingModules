import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmarttestRoutingModule } from './smarttest-routing.module';
import { SmarthomeComponent } from './smarthome/smarthome.component';
import { SmartproductsComponent } from './smartproducts/smartproducts.component';


@NgModule({
  declarations: [
    SmarthomeComponent,
    SmartproductsComponent
  ],
  imports: [
    CommonModule,
    SmarttestRoutingModule
  ]
})
export class SmarttestModule { }
