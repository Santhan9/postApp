import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostLoginComponent } from './login/post-login/post-login.component';
import { HomeComponent } from './home/home.component';
import { PostRegisterComponent } from './login/post-register/post-register.component';


const routes: Routes = [
  {path:'', component: PostLoginComponent},
  {path:'home', component: HomeComponent},
  {path: 'register', component: PostRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
