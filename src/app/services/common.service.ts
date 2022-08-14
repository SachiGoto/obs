import { Injectable } from '@angular/core';
import { CartItem, Product } from '../interface';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CommonService {

  products:Product[] = [

    {
      id:1,
      title:"65 inch QLED TV",
      price: 799.99,
      qty:0
    },
    {
      id:2,
      title:"88 inch QLED TV",
      price: 499.99,
      qty:0
    },
    {
      id:3,
      title:"32 inch QLED TV",
      price: 199.99,
      qty:0
    },
    {
      id:4,
      title:"52 inch QLED TV",
      price: 299.99,
      qty:0
    }




  ];

// We need to make this cart an OBSERVABLE because the cart label on the top menu is observing this array.
// 1.Import BehaviourSubject from rxjs
//2.Create a subject of the property that you want to observe. In this ase it's the cart.
// I want to ovserve the changes in cart. So create a new behaviorsubject that is a method of a cart.

//3. Create an Observable of the subject using the 'asObservable()' method.

//4. Whenever there is an update to the item, notify the subject using "next()".

  cart:CartItem[] =[
   {
    id:1,
  title:"test",
  price:123,
  qty:1,
   }

  ];
  cartSubject = new BehaviorSubject(this.cart)
  // it will have a copy of the cart data inside.
  cartObs = this.cartSubject.asObservable();
  // cartObs will create a observable for it.









  constructor() { }
}
