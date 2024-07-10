import {Component, inject} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../Services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   authService: AuthService = inject(AuthService);
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  errorMessage: string | null = null;

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
        return;
      } else {
        // Register
        this.authService.signup(email, password).subscribe({
          next: (res) => {
            console.log(res);
            this.isLoading = false;
          },
          error: (errMsg) => {
            this.isLoading = false;
            this.errorMessage = errMsg;
            this.hideSnackBar();
          }
        });

      }
      form.resetForm();
  }

  hideSnackBar(){
    setTimeout(() => {
      this.errorMessage = null;
    }, 3000);
  }

}
