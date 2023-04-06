import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmarthomeComponent } from './smarthome/smarthome.component';
import { SmartproductsComponent } from './smartproducts/smartproducts.component';

const routes: Routes = [
  {path:'', component:SmarthomeComponent},
  {path:'products',component:SmartproductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmarttestRoutingModule { }
