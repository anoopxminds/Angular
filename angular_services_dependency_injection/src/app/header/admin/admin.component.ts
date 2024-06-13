import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']

})
export class AdminComponent {

  constructor(private userService: UserService){

  }

  name: string = '';
  gender: string = 'Male';
  subType: string = 'Monthly';
  status: string = 'Active';

  createUser() {
    this.userService.createUsers(this.name, this.gender, this.subType, this.status);
    console.log(this.userService.users);
  }

}
