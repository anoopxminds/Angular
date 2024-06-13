import { Component } from '@angular/core';
import { SubscribeService } from '../../Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [SubscribeService]
})
export class SidebarComponent {
  constructor(private subService: SubscribeService){}

  OnSubscribe(){
    // alert("Thank you for your subscription!.");
    this.subService.OnSubscribeClicked('monthly');
  }
}
