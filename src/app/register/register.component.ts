import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  registerUserData: any;
  isError: boolean;
  errorMessage: string;

  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this.registerUserData = {
      firstName: this.firstName,
      lastName: this.lastName,
      userName: this.userName,
      password: this.password
    }

    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          this._router.navigate(['/login'])
        },
        err => {
          console.log(err.error.error);
          
          this.isError = true;
          this.errorMessage = err.error.error;
        }
      )
  }
}
