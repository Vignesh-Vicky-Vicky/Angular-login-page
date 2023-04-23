import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path : "",  component: LandingPageComponent, children :[
    {path : "",  component: LoginComponent, pathMatch: 'full'},
    {path : "signup",  component: SignupComponent},

  ]},
  {path : "dashboard",  component: DashboardComponent},
  {path : "**",  redirectTo: ""},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
