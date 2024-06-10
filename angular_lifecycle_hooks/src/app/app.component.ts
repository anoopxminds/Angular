import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_lifecycle_hooks';

  inputVal:string= 'Hello';

  constructor(){
    console.log("App Component constructor called");
  }

  onClicked(inputEl: HTMLInputElement){
    this.inputVal = inputEl.value;
  }
}
