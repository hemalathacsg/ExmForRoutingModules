import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApigenRoutingModule } from './apigen-routing.module';
import { ApihomeComponent } from './apihome/apihome.component';
import { ApiproductsComponent } from './apiproducts/apiproducts.component';
import { ThirdcomponentComponent } from './thirdcomponent/thirdcomponent.component';


@NgModule({
  declarations: [
    ApihomeComponent,
    ApiproductsComponent,
    ThirdcomponentComponent
  ],
  imports: [
    CommonModule,
    ApigenRoutingModule
  ]
})
export class ApigenModule { }
