import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from "../../Services/auth.service";
import {User} from "../../Models/User";

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit{
  authService: AuthService = inject(AuthService);
  isLoggedIn: boolean = false;

  ngOnInit() {
    this.authService.user.subscribe((user: User) => {
      this.isLoggedIn = user ? true : false;
    });
  }

}
