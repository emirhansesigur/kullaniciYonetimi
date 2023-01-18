import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { DeleteComponent } from './user/delete/delete.component';
import { SearchComponent } from './user/search/search.component';
import { UserComponent } from './user/user.component';



const routes: Routes = [
  {path: 'users/search', component: SearchComponent},
  {path: 'users/login', component: LoginComponent},
  //{path: 'users/adduser', component: AdduserComponent}, // guard kullanildi ve loggedIn degilse giris verilmede
  {path: 'users/adduser', component: AdduserComponent, canActivate:[LoginGuard]}, // guard kullanildi ve loggedIn degilse giris verilmede
  {path: 'users/get', component: UserComponent}, 
  //{path: 'users/delete', component: DeleteComponent, canActivate:[LoginGuard]}, 
  {path: 'users/delete', component: DeleteComponent}, 
  {path: 'users/get/:userId', component: UserComponent}, // :userId burada da calisiyor ve formda bunu kullanabilirsin
  {path: '', redirectTo : 'users/get', pathMatch:'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule], // root tanımlarının import edilebilmesini sağlamıs
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
