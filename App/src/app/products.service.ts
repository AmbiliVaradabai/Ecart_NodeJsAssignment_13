import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _Productsurl ="http://localhost:3000/api/Products"
  private _ProductDetailsurl ="http://localhost:3000/api/Products/"

  constructor(private http: HttpClient ) {}

  GetProducts(){
    return this.http.get<any>(this._Productsurl)
  }

  GetProductDetail(id){
    //const params = new HttpParams().set('ProductID',id )
    return this.http.get<any>(this._ProductDetailsurl+id)
  }


}
