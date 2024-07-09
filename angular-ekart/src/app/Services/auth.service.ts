import {inject, Injectable} from "@angular/core";
import {UserService} from "./user.service";
import {HttpClient} from "@angular/common/http";
import {AuthResponse} from "../Models/AuthResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  httpClient: HttpClient = inject(HttpClient);
  isLoggedIn: boolean = false;
  userService: UserService = inject(UserService);

  login(username: string, password: string){

    let user = this.userService.users.find((u) => u.username === username && u.password === password);
    if (user === undefined) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
    }
      return this.isLoggedIn;
  }

  logOut(){
    return this.isLoggedIn = false;
  }

  isAuthenticated(){
    return this.isLoggedIn;
  }

 signup(email: string, password: string){
   const data = {email: email, password: password, returnSecureToken: true}
    return this.httpClient.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyAUfooRQ3tZcQ9EpJPrbk03BLfOjQYlWXk", data)
 }



}
