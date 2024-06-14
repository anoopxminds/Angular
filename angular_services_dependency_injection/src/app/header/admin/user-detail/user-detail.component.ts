import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';
import { USER_TOKEN } from 'src/app/app.module';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
    selectedUser: User;
    userService = inject(USER_TOKEN);

    ngOnInit(){
        this.userService.UserDetailsClicked.subscribe((data: User) => {
          this.selectedUser = data;
          console.log(data);
        })
    }
}
