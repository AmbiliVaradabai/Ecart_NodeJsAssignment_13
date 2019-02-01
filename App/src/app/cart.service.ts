import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {       
  
  _addToCartUrl = "http://localhost:3000/api/Cart"
  _editCartUrl = "http://localhost:3000/api/EditCart"
  _approveCartUrl = "http://localhost:3000/api/ApproveCart"

  constructor(private http: HttpClient) { }

  getAllCart(){
    return this.http.get<any>(this._approveCartUrl)
  }

  GetCartbyUser(id){
    return this.http.get<any>(this._addToCartUrl+'/'+id)
  }

  GetCartbyID(id){
    console.log("iam in angulkar servie " +id)
    return this.http.get<any>(this._editCartUrl+"/"+id)
  }

  addToCart(cart){
    return this.http.post<any>(this._addToCartUrl+'/'+ localStorage.getItem("UserName"),cart)
  }

  removeFromCart(id){
    return this.http.delete<any>(this._addToCartUrl+"/"+id)
  }

  editCart(cart){
     return this.http.put<any>(this._editCartUrl+"/"+cart.PurchaseID,cart)
  }

  approveCart(cart){
    return this.http.put<any>(this._approveCartUrl+"/"+cart.PurchaseID,cart)
  }

}
