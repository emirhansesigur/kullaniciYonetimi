import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { AlertifyService } from '../services/alertify.service';
import { UserService } from '../services/user.service';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private alertifyService:AlertifyService, private accountService: AccountService){}

  ngOnInit(){}

  login(form: NgForm){
    // console.warn(form.value);
    this.userService.loginUser(form.value).subscribe(data=>{
      if(data){
        console.warn(data);
      }
      this.alertifyService.success(data.username + " basariyla giris yapildi");
      this.accountService.login(form.value.username)
    })


  }

  


}
