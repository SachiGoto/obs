import { Component , OnInit} from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'obs';
  cartQty:number=0;

  constructor(private cs:CommonService){



  }


  ngOnInit(){

    this.cs.cartObs.subscribe(res=>{
          console.log("Cart Observable Response", res);
          console.log("Cart Observable Response", res.length);
          this.cartQty = res.length;
          console.log("Cart quantity ",this.cartQty);

    })

  }
}
