import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApihomeComponent } from './apihome/apihome.component';
import { ApiproductsComponent } from './apiproducts/apiproducts.component';
import { ThirdcomponentComponent } from './thirdcomponent/thirdcomponent.component';

const routes: Routes = [
  {path:'', component:ApihomeComponent},
  {path:'products', component:ApiproductsComponent},{path:'thirdcomponent', component:ThirdcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApigenRoutingModule { }
