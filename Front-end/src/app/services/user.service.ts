import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../user/user';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'
import { Category } from '../category/category';
import { NgForm } from '@angular/forms';
import { Login } from '../login/login';

// 414. videoyu burada goruyoruz kullanmayi


@Injectable() // global bir servis degil
export class UserService {

  constructor(private http: HttpClient) { }

  users: User[] | undefined;
  path = "http://localhost:3000/users";
// http://localhost:3000/users/get/:userId?

  getUsers(userId: string): Observable<User[]> {
    let newPath = this.path +"/get"; 
    if(userId){// FİLİTRELEME YAPTIK, 
      newPath += "/" + userId;
    }

    return this.http
      .get<User[]>(newPath).pipe(
        tap(data => console.log(JSON.stringify(data)))
      )
  }

  addUser(user:User):Observable<User>{
    let newPath = this.path + "/adduser";
    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    
    return this.http.post<User>(newPath, user, httpOptions).pipe(
      tap(data => console.warn(JSON.stringify(data)))
    )
  }
  // <User> koyduk çünkü tip güvenli çalışıyoruz
  // pipe ne ise yarıyor bak.

  loginUser(login:Login):Observable<Login>{

    let newPath = this.path + "/login";
    const httpOptions={
      headers: new HttpHeaders({
        //method: 'POST',
        'Content-Type': 'application/json'
      })
    }
    
    return this.http.post<Login>(newPath, login, httpOptions).pipe(
      tap(data => console.warn(JSON.stringify(data)))
    )

  } 

  deleteUser(username: string):Observable<User>{
    let newPath = this.path + "/delete/" + username;
    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    
    return this.http.delete<User>(newPath, httpOptions).pipe(
      tap(data => console.warn(JSON.stringify(data)))
    )
  }

  
}
