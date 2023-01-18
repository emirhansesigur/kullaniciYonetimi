import { Component, OnInit } from '@angular/core';
import { User } from './user';
// declare let alertify:any; // sistemdeki javaScript dosyalarından alertify ı buluyor. buradan kestik
import { AlertifyService } from '../services/alertify.service'
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit{

  constructor(
    private alertifyService: AlertifyService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute) { } // route'daki parametreyi yakalamak

  users: User[] | undefined;
  
  
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.userService.getUsers(params["userId"]).subscribe(data => {
      this.users = data;
    });

    })

  }

  title = "Kullanici Listesi";

  addToCard(user: User) {
    this.alertifyService.success(user.username + " bu da deneme mesaji");
  }
  
}
