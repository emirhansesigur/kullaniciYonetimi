import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { AdduserComponent } from './adduser/adduser.component';
import { SearchComponent } from './user/search/search.component';
import { AccountService } from './services/account.service';
import { LoginGuard } from './login/login.guard';
import { DeleteComponent } from './user/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    LoginComponent,
    AdduserComponent,
    UserComponent,
    SearchComponent,
    DeleteComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AccountService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
