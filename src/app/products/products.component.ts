import { Component, OnInit } from '@angular/core';
import { Product } from '../interface';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private cs:CommonService) { }

  products:Product[]=[];

  incQty(id:number){
       let index = this.products.findIndex(x=>x.id === id);
       console.log(index);

       this.products[index].qty = this.products[index].qty + 1;


  }

  decQty(id:number){
    let index = this.products.findIndex(x=>x.id === id);

    if(this.products[index].qty !== 0){
    console.log(index);

    this.products[index].qty = this.products[index].qty - 1;
    }
  }

  addToCart(id:number, title:string, price:number, qty:number){

    let cartindex = this.cs.cart.findIndex(x=> x.id === id);
    let productindex = this.products.findIndex(x=> x.id === id);
    console.log("Cart index:" , cartindex);
      let cartItem = {
        id:id,
        title:title,
        price:price,
        qty:qty,

      }

      if(cartindex === -1){

      this.cs.cart.push(cartItem);
      console.log(this.cs.cart);

      }else{
        this.cs.cart[cartindex].qty = qty;
        this.cs.products[productindex].qty = qty;

        console.log(this.cs.cart);
      }

      if(qty ===0){
        this.cs.cart.splice(cartindex, 1);
      }

      this.cs.cartSubject.next(this.cs.cart);
      console.log(this.cs.cart);

  }

  removeFromCart(id:number){
    // let cartindex = this.cs.cart.findIndex(x=> x.id ===id);
    //   this.cs.cart.splice(cartindex, 1);
    //   console.log(this.cs.cart);

    //   this.cs.cartSubject.next(this.cs.cart);
    //   console.log(this.cs.cart);

    this.cs.removeFromCart(id);

  }

  ngOnInit(): void {


    this.products = this.cs.products;
  }


}
