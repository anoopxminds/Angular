import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges{
  title:string = 'Demo content title';
  @Input() message:string;
    
  constructor(){
    console.log('Demo Component constructor called');
    console.log(this.title);
    console.log(this.message);
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChange property called');
    console.log(changes);
  }
}
