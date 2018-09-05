import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { AtpComponent } from './atp/atp.component';
import { AddComponent } from './atp/add/add.component';
import { ListComponent } from './atp/list/list.component';
import { ViewComponent } from './atp/view/view.component';
import { TitleComponent } from './atp/title/title.component';

const routes: Routes =[
  {path:'atp',component:AtpComponent},
  {path:'add',component:AddComponent},
  {path:'add/:id',component:AddComponent},
  {path:'list',component:ListComponent},
  {path:'view/:id',component:ViewComponent},
  {path:'title/:category',component:TitleComponent},
  {path:'',redirectTo:'/atp',pathMatch:'full'}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AtpRoutingModule { }
