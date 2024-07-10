import {Component, inject, OnInit} from "@angular/core";
import {UserService} from "../Services/user.service";
import {User} from "../Models/User";
import {AuthService} from "../Services/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header-component.html',
    styleUrls: ['./header-component.css']
})
export class HeaderComponent implements OnInit{
  authService: AuthService = inject(AuthService);
  isLoggedIn: boolean = false;

  ngOnInit() {
      this.authService.user.subscribe((user: User) => {
        this.isLoggedIn = user ? true : false;
      });
  }

}
