import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public name: string="";
  public term:string="";
  public price: number=0;
  public rating:number=0;
  public itsfreeDelivery:boolean=false

  // for table
  public products:any =[ 
    {name:'pen', price:10,rating:3 ,isFreeDelivery: true},
    {name:'book', price:20,rating:3.8 ,isFreeDelivery: false},
    {name:'phone', price:100,rating:3 ,isFreeDelivery: true},
    {name:'shirt', price:400,rating:5 ,isFreeDelivery: true},
    {name:'cap', price:120,rating:4 ,isFreeDelivery: true},
    {name:'pant', price:100,rating:2 ,isFreeDelivery: true},
    {name:'tv', price:100,rating:3 ,isFreeDelivery: true},
    {name:'mobile cover', price:140,rating:2.8 ,isFreeDelivery: true},
    {name:'airpods', price:440,rating:4.5 ,isFreeDelivery: true},
    {name:'airpods', price:1000,rating:4.5 ,isFreeDelivery: true},


  ]
  price1h(){
    this.products=this.products.sort((a:any,b:any)=> a.price-b.price);
  }
  priceh2(){
  this.products=this.products.sort((a:any,b:any)=> b.price-a.price);
}
ratinghl(){
  this.products=this.products.sort((a:any,b:any)=> b.rating-a.rating);
}
rating1(){
  this.products=this.products.sort((a:any,b:any)=> a.rating-b.rating);
}
search(){
  this.products=this.products.filter((product:any)=> product.name.indexOf(this.term) !=-1);
}
onlyfreedelivery(){
  this,this.products=this.products.filter(
    (product:any)=>product.isFreeDelivery==true
  )
}
applyDiscount(){
 this.products = this.products.map((product:any)=>{
  product.price = product.price/2;
  return product;
 })
}
// applydelivergeychars(){
//   this.products = this.products.map((product:any)=>{
//    product.price = product.price+2;
//    return product;
  // })

total(){
  var total= this.products.reduce ((sum:any,product:any)=>sum+product.price,0);
  alert("total price is "+total);
}

cartitems(){
  alert("total cart items:"+this.products.lenth);
}

delete( i:any){
  this.products.splice(i,1);
  
}
add(){
  var product = {
    name: this.name,
    price: this.price,
    rating: this.rating,
    isFreeDelivery: this.itsfreeDelivery
  }
  this.products.unshift(product)
}


}