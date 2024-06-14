import { Component } from '@angular/core';
import { Observable, timeInterval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_observable';
  data: any[] = [];


  //CREATE NEW OBSERVER


  //Observable
  myObservable = new Observable(observer => {
    setTimeout(() => {observer.next(1)}, 1000);
    setTimeout(() => {observer.next(2)}, 2000);
    setTimeout(() => {observer.next(3)}, 3000);
    setTimeout(() => {observer.next(4)}, 4000);
    setTimeout(() => {observer.next(5)}, 5000);
  });

  getAsyncData(){
      this.myObservable.subscribe((val: any) => {
        this.data.push(val);
      });
  }


}
