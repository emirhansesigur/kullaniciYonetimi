import { Injectable } from '@angular/core';
import { Login } from '../login/login';

@Injectable()
export class AccountService {
  // AccountService bir global servis oldugundan dolayı baska degiskenler baska yerlerde de kullanılabilir.
  constructor() { }

  loggedId = false;
  login(user: string):boolean{
    if(user){
      this.loggedId = true;
      localStorage.setItem("isLogged", user);
      return true;
    }
    return false;
  }

  isLoggedIn(){ // giris yapılmıs ise
    return this.loggedId;
  }

  logOut(){ // cıkıs yaparken butonda kullanılır
    localStorage.removeItem("isLogged");
    this.loggedId=false;
  }

}
