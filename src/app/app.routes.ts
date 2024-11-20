import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CommunityComponent} from './community/community.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MainComponent} from './main/main.component';

export const routes: Routes = [{
  path:"home",
  component:HomeComponent,
},{
  path:"about",
  component:AboutComponent
},{
  path:"login",
  component:LoginComponent
},{
  path:"register",
  component:RegisterComponent
},{
  path:"community",
  component:CommunityComponent
},{
  path:"main",
  component:MainComponent
}];
