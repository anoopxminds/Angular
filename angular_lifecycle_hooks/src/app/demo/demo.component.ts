import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy{
  title:string = 'Demo content title';
  @Input() message:string;
  @ViewChild('temp') tempPara:ElementRef;
  toDestroy:boolean = false;
    
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
  ngAfterContentInit(){
    console.log('ngAfterContentInit hook called');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked hook called');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit hook called');
  }
  ngOnDestroy(){
    this.toDestroy = !this.toDestroy;
  }
}
