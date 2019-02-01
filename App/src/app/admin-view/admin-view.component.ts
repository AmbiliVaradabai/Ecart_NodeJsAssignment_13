import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  carts = []
  constructor(private _cart:CartService) { }

  ngOnInit() {
    this.getAllCart()
  }

  getAllCart(){
    this._cart.getAllCart()
    .subscribe(
      res => this.carts = res,
      err => console.log (err)
    )  
  }

  approveCart(carts){
    console.log (carts)
    this._cart.approveCart(carts)
    .subscribe(
      res =>{ console.log (res);this.getAllCart();},
      err => console.log (err)
    ) 
  }

  isApproved(IsApproved){
    if (IsApproved === 1) {
      return true 
    }
  }

}
