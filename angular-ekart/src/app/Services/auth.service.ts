import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthResponse} from "../Models/AuthResponse";
import {catchError, Subject, throwError} from "rxjs";
import {User} from "../Models/User";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  httpClient: HttpClient = inject(HttpClient);
  isLoggedIn: boolean = false;
  user = new Subject<User>();


  // login(username: string, password: string){
  //
  //   let user = this.userService.users.find((u) => u.username === username && u.password === password);
  //   if (user === undefined) {
  //     this.isLoggedIn = false;
  //   } else {
  //     this.isLoggedIn = true;
  //   }
  //     return this.isLoggedIn;
  // }
  isAuthenticated(){
    return this.isLoggedIn;
  }

 signup(email: string, password: string){
   const data = {email: email, password: password, returnSecureToken: true}
    return this.httpClient.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAUfooRQ3tZcQ9EpJPrbk03BLfOjQYlWXk\n",
      data).pipe(catchError(this.handleError), tap((res) => {
        this.handleCreateUser(res);
    }))
 }

 login(email, password) {
   const data = {email: email, password: password, returnSecureToken: true}
    return this.httpClient.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAUfooRQ3tZcQ9EpJPrbk03BLfOjQYlWXk\n',
      data).pipe(catchError(this.handleError), tap((res) => {
     this.handleCreateUser(res);
   }))
 }

 private handleCreateUser(res) {
   const expiredInTS = new Date().getTime()+ + res.expiresIn * 1000;
   const expiredIn = new Date(expiredInTS);
   const user = new User(res.localId, res.email, res.idToken, expiredIn);
   return this.user.next(user);
 }

 private handleError(err){
   let errorMessage = "An unknown error has been occurred !";
   if (!err.error || !err.error.error) {
     return throwError(() => errorMessage);
   }

   switch (err.error.error.message) {
     case  'EMAIL_EXISTS' :
       errorMessage = "The email address is already in use by another account.";
       break;
     case 'OPERATION_NOT_ALLOWED' :
       errorMessage = "Password sign-in is disabled for this project.";
       break;
     case 'TOO_MANY_ATTEMPTS_TRY_LATER' :
       errorMessage = "We have blocked all requests from this device due to unusual activity. Try again later.";
       break;
     case 'INVALID_LOGIN_CREDENTIALS':
       errorMessage = "Invalid username and password !";
       break;
     case 'INVALID_PASSWORD':
       errorMessage = "The password is invalid or the user does not have a password.";
       break;
     case 'USER_DISABLED':
       errorMessage = "The user account has been disabled by an administrator.";
       break;
   }
   return throwError(() => errorMessage);
 }


}
