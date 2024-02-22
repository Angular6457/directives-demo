import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-demo',
  templateUrl: './switch-demo.component.html',
  styleUrls: ['./switch-demo.component.css']
})
export class SwitchDemoComponent {
  public viewName:string = "";

  public ViewClick(viewName:string){
    this.viewName = viewName;
  }
}