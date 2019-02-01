import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../products.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  ProductList = []
  public selectedId;
  constructor(private _Products:ProductsService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this._Products.GetProducts()
    .subscribe(
      res => this.ProductList = res,
      err => {
        if( err instanceof HttpErrorResponse ) {
          if (err.status === 401) {
            this.router.navigate(['/Login'])
          }
        }
      }
    )
  }

  onSelect(Product){
    this.router.navigate([Product.ProductID], { relativeTo: this.route });
  }

}
