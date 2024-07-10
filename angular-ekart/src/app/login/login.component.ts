import {Component, inject} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../Services/auth.service";
import {Observable} from "rxjs";
import {AuthResponse} from "../Models/AuthResponse";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  errorMessage: string | null = null;
  authObs: Observable<AuthResponse>;

  onSwitdhMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onFormSubmitted(form: NgForm){
      //console.log(form.value);
    this.isLoading = true;
      const email = form.value.email;
      const password = form.value.password;
      if(this.isLoginMode) {
        // Login
        this.authObs =  this.authService.login(email, password);
      } else {
        // Register
        this.authObs = this.authService.signup(email, password);
      }

    this.authObs.subscribe({
      next: (res) => {
        console.log(res);
        this.isLoading = false;
        this.router.navigate(['/home'])
      },
      error: (errMsg) => {
        this.isLoading = false;
        this.errorMessage = errMsg;
        this.hideSnackBar();
      }
    });

      form.resetForm();
  }

  hideSnackBar(){
    setTimeout(() => {
      this.errorMessage = null;
    }, 3000);
  }

}
