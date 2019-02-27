import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminDashboardComponent} from'./admin/admin-dashboard/admin-dashboard.component';
import {PostAPropertyComponent} from './admin/post-a-property/post-a-property.component';
import {ListOfPropertiesComponent} from './admin/list-of-properties/list-of-properties.component';
import {ListOfEnquiresComponent} from './admin/list-of-enquires/list-of-enquires.component';
import {ChangePasswordComponent} from './admin/change-password/change-password.component';
import {MyProfileComponent} from './admin/my-profile/my-profile.component';
import { AdminComponent } from './admin/admin.component';

const routes1: Routes = [
  
  {path:'admin',component:AdminComponent},
  {path:'dashboard',component:AdminDashboardComponent},
  {path:'post-a-property',component:PostAPropertyComponent},
  {path:'list-of-properties',component:ListOfPropertiesComponent},
  {path:'list-of-enquires',component:ListOfEnquiresComponent},
  {path:'change-password',component:ChangePasswordComponent},
  {path:'my-profile',component:MyProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes1)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
export const adminComponents=[
  AdminDashboardComponent,
  PostAPropertyComponent,
  ListOfPropertiesComponent,
  ListOfEnquiresComponent,
  ChangePasswordComponent,
  MyProfileComponent
]
