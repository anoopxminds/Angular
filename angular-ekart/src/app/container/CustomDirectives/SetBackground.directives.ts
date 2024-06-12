import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[setBackground]'
})
export class SetBackgound implements OnInit{
    //private element: ElementRef;
    @Input() backColor: string = 'white';
    @Input() textColor:string = '#28282B';
    constructor(private element: ElementRef, private renderer: Renderer2){
        // this.element = element;
    }

    ngOnInit(){
        // this.element.nativeElement.style.backgroundColor = "#36454F";
        // this.element.nativeElement.style.color = "White";
        this.renderer.setStyle(this.element.nativeElement, "backgroundColor", this.backColor);
        this.renderer.setStyle(this.element.nativeElement, "color", this.textColor);
    }
}