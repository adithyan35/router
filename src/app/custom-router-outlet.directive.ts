import {  Directive, ElementRef, EmbeddedViewRef, inject, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Directive({
  selector: '[appCustomRouterOutlet]',
  standalone: true
})
export class CustomRouterOutletDirective {
  hostEl = inject(ElementRef).nativeElement;

  constructor(
    private viewContainerRef: ViewContainerRef, 
    private renderer: Renderer2  ,
    private router: Router,

  ) {
  
  }

  ngOnInit(){
    this.renderer.setStyle(this.hostEl, 'color', 'red');
    this.renderer.setStyle(this.hostEl, 'border', '2px solid black');
    this.renderer.setStyle(this.hostEl, 'border-radius', '5px');
    this.renderer.setStyle(this.hostEl, 'padding', '8px');
  }

  ngAfterViewInit() {
    this.loadContent();
  }

  private loadContent() {
    this.viewContainerRef.clear();  


    const dynamicDiv=this.renderer.createElement('div');
    this.renderer.setProperty(dynamicDiv, 'innerHTML',
      `<h1> hi welcome to my site  </h1>
      <p>this connect your seeing  is from the custome directive  </p>
      <ul>
      <li>
      adithyan
      </li>
      <li>
      rithvik
      </li>
      <li>
      priya
      </li>
      </ul>
      `)

      const button = this.renderer.createElement('button');
      this.renderer.appendChild(button, this.renderer.createText('User'));

      this.renderer.appendChild(dynamicDiv,button);
      

      const hostElement = this.viewContainerRef.element.nativeElement;
      this.renderer.appendChild(hostElement, dynamicDiv);

    this.renderer.listen(button, 'click', () =>{this.router.navigate(['/user'])} );
  }
  
  
}




