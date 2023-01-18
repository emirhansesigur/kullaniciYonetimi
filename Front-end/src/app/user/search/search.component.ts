import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent  implements OnInit { //implements OnInit
  userId: number| undefined; // two way binding kullanıldı.
  constructor(private router: Router) {}

  ngOnInit() {}

  searchByUserId() { 
    this.router.navigate(['/users/get/', this.userId]); 
  }

}
