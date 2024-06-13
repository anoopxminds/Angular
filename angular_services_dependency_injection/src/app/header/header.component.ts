import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectedTab:string = 'home';
  constructor(private subService:SubscribeService){}

  HomeClicked(){
    this.selectedTab = 'home';
  }

  AdminClicked(){
    this.selectedTab = 'admin';
  }

  OnSubscribe(){
    // alert("Thank you for your subscription!.");
    // let subService = new SubscribeService();
    this.subService.OnSubscribeClicked('monthly');
  }
}
