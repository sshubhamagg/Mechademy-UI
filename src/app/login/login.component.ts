import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = null;
  password: string = null;
  loginUserData :any;
  isError:boolean;
  errorMessage:string;

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
    this.init();
  }

  init() {
    localStorage.clear();
  }

  loginUser () {
    

    this._auth.loginUser(this.userName, this.password)
    .subscribe(
      res => {
        localStorage.setItem('token',res.token)
        localStorage.setItem('firstName',res.data.firstName)
        localStorage.setItem('userName', res.data.userName)

        this._router.navigate(['/blockSuccess'])
      },
      err => {
        console.log(err);
        
        this.isError=true;
        this.errorMessage=err.error.error.error ;
        this._router.navigate(['/login'])}
    ) 
  }

}
