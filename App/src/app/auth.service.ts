import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginurl ="http://localhost:3000/api/Login"
  constructor(private http:HttpClient, private router:Router ){}
  
  LoginUser(user){
    return this.http.post<any>(this._loginurl, user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
  
  logoutUser() {
    localStorage.removeItem('token')
    localStorage.removeItem('UserName')
    this.router.navigate(['/Login'])
  }

  getTocken(){
    return localStorage.getItem('token')
  }
}
