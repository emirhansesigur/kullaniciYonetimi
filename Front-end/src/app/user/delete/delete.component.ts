import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers: [UserService]
})
export class DeleteComponent {



  constructor(private userService: UserService, private alertifyService: AlertifyService){}

  delete(form: NgForm){
    this.userService.deleteUser(form.value.username).subscribe(data=>{
      this.alertifyService.success(data.username + "kullanicisi basariyla silindi");
    })
  }

}
