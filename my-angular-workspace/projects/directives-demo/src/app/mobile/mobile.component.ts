// import { Component, TemplateRef, ViewChild } from '@angular/core';

// @Component({
//   selector: 'app-mobile',
//   templateUrl: './mobile.component.html',
//   styleUrls: ['./mobile.component.css']
// })
// export class MobileComponent {
//   public thenBlock:TemplateRef<any>|null = null;

//   @ViewChild('mobile1',{static:true}) public View1:TemplateRef<any>|null = null;
//   @ViewChild('mobile2',{static:true}) public View2:TemplateRef<any>|null = null;
//   @ViewChild('mobile3',{static:true}) public View3:TemplateRef<any>|null = null;
//   @ViewChild('mobile4',{static:true}) public View4:TemplateRef<any>|null = null;
//   @ViewChild('view5',{static:true}) public View5:TemplateRef<any>|null = null;
//   @ViewChild('view6',{static:true}) public View6:TemplateRef<any>|null = null;

//   ngOnInit():void{
//     this.thenBlock = this.View1;
//   }

//   public ChangeView(viewName:string){
//     switch(viewName){
//       case "mobile1":this.thenBlock = this.View1;break;
//       case "mobile2":this.thenBlock = this.View2;break;
//       case "mobile3":this.thenBlock = this.View3;break;
//       case "mobile4":this.thenBlock = this.View4;break;
//       // case "view5":this.thenBlock = this.View5;break;
//       // case "view6":this.thenBlock = this.View6;break;
//     }
//   }
// }