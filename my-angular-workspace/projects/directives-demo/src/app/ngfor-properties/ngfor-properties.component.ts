import { Component } from '@angular/core';
import { FakestoreContract } from '../fakestore.contract';
@Component({
  selector: 'app-ngfor-properties',
  templateUrl: './ngfor-properties.component.html',
  styleUrls: ['./ngfor-properties.component.css']
})
export class NgforPropertiesComponent {
  public products:FakestoreContract[] = [];
  ngOnInit(){
      fetch('https://fakestoreapi.com/products')
      .then(data=>data.json())
      .then(data=>{
        this.products = data;
      })
  }
}
