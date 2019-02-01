import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  ProductDetail = {}
  constructor(private _proddetails:ProductsService, 
              private router:Router, 
              private activateroute: ActivatedRoute,
              private _cart:CartService)  { }

  ngOnInit() {
    //get the routing parameters
    const ProductDetailparams = this.activateroute.snapshot.params;

    //Get the details corresponding to the selected prdductid 
    this._proddetails.GetProductDetail( ProductDetailparams.ProductID )
    .subscribe(
      res => this.ProductDetail = res,
      err => console.log(err)
    )

  }

  gotoDepartments() {
    this.router.navigate(['../'], { relativeTo: this.activateroute });
  }

  addToCart(){
    this._cart.addToCart(this.ProductDetail)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  showCart(){
    this.router.navigate(['/Cart'])
  }

}
