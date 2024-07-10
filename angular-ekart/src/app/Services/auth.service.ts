import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthResponse} from "../Models/AuthResponse";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  httpClient: HttpClient = inject(HttpClient);
  isLoggedIn: boolean = false;

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
      data).pipe(catchError(err => {
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
        }
        return throwError(() => errorMessage);
    }))
 }



}
