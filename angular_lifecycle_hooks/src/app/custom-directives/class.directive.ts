import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element:ElementRef, private renderer: Renderer2) { }

  @Input() set appClass(value) {
      let entries = Object.entries(value);
      // console.log(entries);
      for(let item of entries){
        // console.log(item[0]);
        // console.log(item[1]);
        let[itemKey, itemVal] = item;
        if (itemVal) {
          this.renderer.addClass(this.element.nativeElement, itemKey);
        }
      }
  }
}
