import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts =[]
  constructor(private _cart:CartService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.GetCartbyUser()
  }

  GetCartbyUser(){
    this._cart.GetCartbyUser(localStorage.getItem("UserName"))
    .subscribe(
      res => this.carts = res,
      err => console.log (err)
    )  
  }

  removeFromCart(id){
    this._cart.removeFromCart(id)
    .subscribe(
      res =>{ console.log (res);this.GetCartbyUser();},
      err => console.log (err)
    ) 
  }

  onEdit(carts){
    this.router.navigate(['/EditCart', carts.PurchaseID]);
  }

  isApproved(IsApproved){
    if (IsApproved === 1) {
      return true 
    }
  }
}
