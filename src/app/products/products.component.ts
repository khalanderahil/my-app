import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public products: any=[];

  constructor(private _productsservice:ProductsService){
    _productsservice.getproducts().subscribe(
    (data:any)=>{
      this.products=data;
    },
    (error:any) => {
      alert("internal server error");
    }
    )
  }
  }


