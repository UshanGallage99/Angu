import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'; 
import {LoginComponent} from "./components/share/login/login.component";
import {SignUpComponent} from "./components/share/sign-up/sign-up.component";
import {ProfileComponent} from "./components/share/profile/profile.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent}, 
  {path: 'profile', component: ProfileComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
