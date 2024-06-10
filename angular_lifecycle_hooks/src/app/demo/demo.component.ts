import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  title:string = 'Demo content title';
  @Input() message:string = 'Test message';
    
  constructor(){
    console.log('Demo Component constructor called');
    console.log(this.title);
    console.log(this.message);
  }
}
