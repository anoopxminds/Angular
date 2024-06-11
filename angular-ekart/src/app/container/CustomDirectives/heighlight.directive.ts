import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeighlight]'
})
export class HeighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseenter') OnMouseEnter(){
      this.renderer.addClass(this.element.nativeElement, "heighlight-product");
  }

  @HostListener('mouseout') OnMouseOut(){
    this.renderer.removeClass(this.element.nativeElement, "heighlight-product");
  }

}
