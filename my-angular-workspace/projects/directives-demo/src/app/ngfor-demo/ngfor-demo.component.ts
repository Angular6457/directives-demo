import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor-demo',
  templateUrl: './ngfor-demo.component.html',
  styleUrls: ['./ngfor-demo.component.css']
})
export class NgforDemoComponent {
  public courses:string[] = ["Javascript","Typescript","Angular","Azure",".Net Core","React"];

  public productsMenu:{Category:string,products:string[]}[] = [
    {
      Category:"Eelectronics",
      products:['Mobiles','Laptops',"Tablets"]
    },
    {
      Category:"Footwear",
      products:["Boots","Shoes","Sandles","Casuals"]
    },
    {
      Category:"Clothing",
      products:["Shirts","Jeans"]
    }
  ];

  public employees:{Name:string,Salary:number}[]=[
    {Name:"Srikanth",Salary:12345},
    {Name:"Srikanth",Salary:12345},
    {Name:"Srikanth",Salary:12345},
    {Name:"Srikanth",Salary:12345},
    {Name:"Srikanth",Salary:12345}
  ]
}


