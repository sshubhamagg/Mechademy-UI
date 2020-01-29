import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { tokenKey } from '@angular/core/src/view';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  loginUser () {

   
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token',res.token)
        localStorage.setItem('firstName',res.data.firstName)
        localStorage.setItem('userName', res.data.userName)

        this._router.navigate(['/blockSuccess'])
      },
      err => {
        this._router.navigate(['/register'])}
    ) 
  }

}
