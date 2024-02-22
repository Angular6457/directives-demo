import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent {
  public thenBlock:TemplateRef<any>|null = null;
  public TemplateName:string = "Choose Template";

  @ViewChild('Template1',{static:true}) 
  public Template1:TemplateRef<any>|null = null;
  @ViewChild('Template2',{static:true}) 
  public Template2:TemplateRef<any>|null = null;
  @ViewChild('Template3',{static:true}) 
  public Template3:TemplateRef<any>|null = null;

  ngOnInit(){
    this.thenBlock = this.Template1;
  }

  public TemplateChange():void{
    switch(this.TemplateName){
      case "Template1":
        this.thenBlock = this.Template1;
        break;
      case "Template2":
        this.thenBlock = this.Template2;
        break;
      case "Template3":
        this.thenBlock = this.Template3;
        break;
    }
  }

}