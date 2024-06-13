import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  constructor(private subService: SubscribeService){}
  OnSubscribe(){
    // alert("Thank you for your subscription!.");
    // let subService = new SubscribeService();
    this.subService.OnSubscribeClicked('monthly');
  }
}
