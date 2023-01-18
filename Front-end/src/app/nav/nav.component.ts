import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  
  constructor(private accountService: AccountService){}

  isLoggedIn(){
    return this.accountService.isLoggedIn();
  }
  logOut(){
    this.accountService.logOut();
  }

}
