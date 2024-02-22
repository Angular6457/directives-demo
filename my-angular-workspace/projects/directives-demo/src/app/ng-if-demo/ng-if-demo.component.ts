import { Component } from '@angular/core';
import { FakestoreContract } from '../fakestore.contract';
@Component({
  selector: 'app-ng-if-demo',
  templateUrl: './ng-if-demo.component.html',
  styleUrls: ['./ng-if-demo.component.css']
})
export class NgIfDemoComponent {
  public product:FakestoreContract = {
    id:0,
    category:'',
    description:'',
    image:'',
    price:0,
    rating:{
      count:0,
      rate:0
    },
    title:''
  }

  public LoadProductData(id:number):void{
    fetch('https://fakestoreapi.com/products/'+id)
    .then(data=>data.json())
    .then(data=>{
      this.product = data;
    })
  }
  public count:number = 1;
  ngOnInit(){
    this.LoadProductData(this.count);
  }
  public NextClick():void{    
    this.count++;
    this.LoadProductData(this.count);
  }

  public PrevClick():void{
    this.count--;
    this.LoadProductData(this.count);
  }
}

