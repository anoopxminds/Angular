import {Component, inject, Input, OnInit} from '@angular/core';
import {User} from "../../Models/User";
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit{
  // menuItems:string[] = ['Home', 'Products', 'Sale', 'New Arrival', 'Contact'];
  authService: AuthService = inject(AuthService);
 isLoggedIn: boolean = false;


  ngOnInit() {
    this.authService.user.subscribe((user: User) => {
      this.isLoggedIn = user ? true : false;
    });
  }
}
