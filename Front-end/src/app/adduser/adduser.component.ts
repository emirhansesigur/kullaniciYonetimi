import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';
import { UserService } from '../services/user.service';
//import { UserService } from '../services/user.service.ts';
import { User } from '../user/user';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  providers: [UserService] // provider'a product service instance ını üretmesi söylenir
})

export class AdduserComponent implements OnInit {
  constructor(private userService:UserService, private alertifyService:AlertifyService){}
  model: User = new User();
  
  ngOnInit(){}

  add(form: NgForm){
    //console.log(form.value);
    
    this.userService.addUser(form.value).subscribe(data=>{
      this.alertifyService.success(data.username + " basariyla eklendi");
    })
    console.warn(form.value);
  }



}
