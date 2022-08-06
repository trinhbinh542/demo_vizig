import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NhatkytuanComponent } from './nhatkytuan/nhatkytuan.component';
import { NhatkydetailComponent } from './nhatkydetail/nhatkydetail.component';
import { NhatkytheodoiComponent } from './nhatkytheodoi/nhatkytheodoi.component';
import { AddworkComponent } from './addwork/addwork.component';




const routes: Routes =[
  { path: 'nhatkytuan', component: NhatkytuanComponent},
  { path: 'nhatkydetail/:id', component: NhatkydetailComponent },
  { path: 'nhatkytheodoi', component: NhatkytheodoiComponent },
  { path: 'addwork', component: AddworkComponent },
  

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
