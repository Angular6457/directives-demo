import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass-demo',
  templateUrl: './ngclass-demo.component.html',
  styleUrls: ['./ngclass-demo.component.css']
})
export class NgclassDemoComponent {

  public bgStyle:string = 'red';
  public textStyle:string = 'white';
  public padding:string = '10px';
  public fontSize:string = '10px';

  public styleObject:{
    'background-color':string,
    'color':string,
    'padding':string,
    'font-size':string
  } = {
    "background-color":this.bgStyle,
    "font-size":this.fontSize,
    "color":this.textStyle,
    "padding":this.padding
  };

  ApplyClick(){
    this.styleObject = {
      "background-color":this.bgStyle,
    "font-size":this.fontSize+"px",
    "color":this.textStyle,
    "padding":this.padding+"px"
    }
  }

  FontSizeChange(){
    this.styleObject = {
      "background-color":this.bgStyle,
      "font-size":this.fontSize+"px",
      "color":this.textStyle,
      "padding":this.padding+"px"  
}
  }
}
