import { Component } from '@angular/core';
import { SubscribeService } from './Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [SubscribeService]
})
export class HeaderComponent {
  constructor(private subService:SubscribeService){}

  OnSubscribe(){
    // alert("Thank you for your subscription!.");
    // let subService = new SubscribeService();
    this.subService.OnSubscribeClicked('monthly');
  }
}
