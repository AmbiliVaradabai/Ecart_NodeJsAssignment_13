import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginUserData = {}
  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit() {
  }

  loginUser(){
    let username = this.loginUserData["username"]
    this._auth.LoginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem("token", res.token)
        localStorage.setItem("UserName",res.username)
        localStorage.setItem("UserRole",res.UserRole)
        this._router.navigate(['/Products'])    
      },
      err => console.log(err)
    )   
  }
 

}
