import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { CartComponent} from '../cart/cart.component'

@Component({
  selector: 'app-edit-cart',
  templateUrl: './edit-cart.component.html',
  styleUrls: ['./edit-cart.component.css']
})

export class EditCartComponent implements OnInit {
  cart = {}
  constructor(private router:Router,
              private activateroute: ActivatedRoute,
              private _cart:CartService) { }

  ngOnInit() {
    //get the routing parameters
    const CartDetailParam = this.activateroute.snapshot.params;

    //Get the details corresponding to the selected prdductid 
     this._cart.GetCartbyID( CartDetailParam.PurchaseID )
     .subscribe(
       res => this.cart = res,
       err => console.log(err)
     )    
  }

  gotoCarts(cart){
    this.router.navigate(['/Cart'])
  }

  editCart(cart){
    this._cart.editCart(cart)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    ) 
  }

}
