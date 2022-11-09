import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})


export class StyleDirective {

  @Input('appStyle') color: string = 'blue'
  @Input('dStyles') d: {fontStyle: string, fontWeight: string} = {fontStyle: 'normal', fontWeight: 'normal'}

  @HostBinding('style.backgroundColor') bgColor: string = 'transparent'


  constructor(private el: ElementRef, private r: Renderer2) {

    const text = r.createText('Anna')
    r.appendChild(el.nativeElement, text)
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event)
  }

  @HostListener('mouseenter') onEnter() {
    this.r.setStyle(this.el.nativeElement, 'color', this.color)
    this.r.setStyle(this.el.nativeElement, 'fontStyle', this.d.fontStyle)
    this.r.setStyle(this.el.nativeElement, 'fontWeight', this.d.fontWeight)
    this.bgColor = this.color
  }

  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.el.nativeElement, 'color', null)
    this.r.setStyle(this.el.nativeElement, 'fontStyle', null)
    this.r.setStyle(this.el.nativeElement, 'fontWeight', null)
    this.bgColor = 'transparent'
  }
}
