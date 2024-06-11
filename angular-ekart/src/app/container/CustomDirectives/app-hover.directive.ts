import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class AppHoverDirective {

  constructor(private element:ElementRef, renderer: Renderer2, ) { 

  }

  @HostBinding('style.backgroundColor') backgroundColor:String = '#28282B';
  @HostBinding('style.color') textColor: string = 'white';
  @HostBinding('style.border') border:string = 'none';

  @HostListener('mouseenter') OnMouseEnter() {
    this.backgroundColor = 'white';
    this.textColor = '#28282B';
    this.border = '#28282B 2px solid';
  }

  @HostListener('mouseout') OnMouseOut() {
    this.backgroundColor = '#28282B';
    this.textColor = 'white';
    this.border = 'none';
  }

}
