import { Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges, OnInit, DoCheck{
  title:string = 'Demo content title';
  @Input() message:string;
  @ViewChild('temp') tempPara:ElementRef;
    
  constructor(){
    console.log('Demo Component constructor called');
    // console.log(this.title);
    // console.log(this.message);
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChange hook called');
    // console.log(changes);
  }
  ngOnInit(){
    console.log('ngOnInit hook called');
    //console.log(this.tempPara.nativeElement.innerHtml);
  }
  ngDoCheck(){
    console.log('ngDoCheck hook called');
  }
}
