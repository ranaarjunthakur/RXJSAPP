import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(private elref:ElementRef,private renderer:Renderer2) { }


  ngOnInit(): void {
    this.elref.nativeElement.style.backgroundColor='green'
    this.elref.nativeElement.style.color='#fff'

     this.renderer.addClass(this.elref.nativeElement, 'wild')  //createElement / appendChild / createText
    const span  = this.renderer.createElement('span')         
    const text = this.renderer.createText('hey angular plz set on my mind')

    this.renderer.appendChild(span,text);
    this.renderer.appendChild(this.elref.nativeElement,span)  

    this.renderer.setAttribute(this.elref.nativeElement, 'aria-hidden', 'true'); //setAttribute / removeAttribute

    this.renderer.addClass(this.elref.nativeElement, 'wild');  //addClass / removeClass
    this.renderer.removeClass(this.elref.nativeElement, 'wild'); // addClass / removeClass

    this.renderer.setStyle(this.elref.nativeElement,'border-left','2px dashed olive');  // setStyle / removeStyle
    this.renderer.removeStyle(this.elref.nativeElement, 'border-left');// setStyle / removeStyle

    this.renderer.setProperty(this.elref.nativeElement, 'alt', 'Cute alligator'); //setProperty
    this.renderer.setProperty(this.elref.nativeElement, 'value', 'Cute alligator'); //setProperty
  }

}
