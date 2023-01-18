import { Injectable } from '@angular/core';
declare let alertify:any; // sistemdeki javaScript dosyalarından alertify ı buluyor. 


@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message:string){
    alertify.success(message);
  }


}

