import { Component, OnInit } from '@angular/core';
import { CartItem } from '../interface';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart:CartItem[]=[];
  totalCost = 0 ;
  constructor(private cs:CommonService) { }

  calculateTotalCost(){
       for(let i=0; i<this.cart.length; i++){
         this.totalCost += (this.cart[i].price * this.cart[i].qty);

       }
  }

  removeFromCart(id:number){
    this.cs.removeFromCart(id);
    this.totalCost=0;
    this.calculateTotalCost();
  }

  ngOnInit(): void {
    this.cs.cartObs.subscribe(res=>{
      this.cart = res;

      this.calculateTotalCost();
    })
  }

}
