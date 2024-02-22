import { Component } from '@angular/core';

@Component({
  selector: 'app-trackby',
  templateUrl: './trackby.component.html',
  styleUrls: ['./trackby.component.css']
})
export class TrackbyComponent {
  public products:any[] = [
    {Name:"Oneplus",Price:34000},
    {Name:"Iphone 14",Price:56000},
    {Name:"Oppo",Price:23000},
    {Name:"Vivo",Price:18000}
  ];
  public UpdateClick(){
    this.products = [
      {Name:"Oneplus",Price:34000},
      {Name:"Iphone 14",Price:56000},
      {Name:"Oppo",Price:23000},
      {Name:"Vivo",Price:18000},
      {Name:"Fossil Smart Watch",Price:22000}
    ];
  }
  public TrackChanges(index:number){
    return index;
  }
}