import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomStr]'
})
export class CustomStrDirective {

  //this is used to create structural custom directive
  constructor(private html:TemplateRef<any>,private container:ViewContainerRef) {}
    @Input() set appCustomStr(cond:boolean){
      if(!cond){
        this.container.createEmbeddedView(this.html)
      }
      else{
        this.container.clear();
      }    
   }

}