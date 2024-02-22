import { Component ,TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent {
  public thenBlock:TemplateRef<any>|null = null;

  @ViewChild('view1',{static:true}) public View1:TemplateRef<any>|null = null;
  @ViewChild('view2',{static:true}) public View2:TemplateRef<any>|null = null;
  @ViewChild('view3',{static:true}) public View3:TemplateRef<any>|null = null;
  @ViewChild('view4',{static:true}) public View4:TemplateRef<any>|null = null;
  @ViewChild('view5',{static:true}) public View5:TemplateRef<any>|null = null;
  @ViewChild('view6',{static:true}) public View6:TemplateRef<any>|null = null;

  ngOnInit():void{
    this.thenBlock = this.View1;
  }

  public ChangeView(viewName:string){
    switch(viewName){
      case "view1":this.thenBlock = this.View1;break;
      case "view2":this.thenBlock = this.View2;break;
      case "view3":this.thenBlock = this.View3;break;
      case "view4":this.thenBlock = this.View4;break;
      case "view5":this.thenBlock = this.View5;break;
      case "view6":this.thenBlock = this.View6;break;
    }
  }
}
