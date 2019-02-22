import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import { PropertiesListComponent } from './properties-list/properties-list.component';
import { PropertDetailsComponent } from './propert-details/propert-details.component';
import { EnquiryforPropertyComponent } from './enquiryfor-property/enquiryfor-property.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'listofproperties', component: PropertiesListComponent},
  {path: 'propertydetails', component: PropertDetailsComponent},
  {path: 'enquiryofproperty', component: EnquiryforPropertyComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent, 
  AboutComponent, 
  ServicesComponent, 
  PropertiesListComponent, 
  PropertDetailsComponent,
  EnquiryforPropertyComponent,
  ContactComponent,
  SignupComponent,
  LoginComponent
]
