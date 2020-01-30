import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'token': this.getToken()
    })
  };
  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    const url=`http://localhost:3000/mechademy/signUp`
    return this.http.post<any>(url, user)
  }

  loginUser(user) {
    const url=`http://localhost:3000/mechademy/login/userName/${user.userName}/password/${user.password}`
    return this.http.get<any>(url)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/events'])
  }

  getToken() {
    return localStorage.getItem('token')
  }
  getFirstName() {
    return localStorage.getItem('firstName')
  }
  getUserName() {
    return localStorage.getItem('userName')
  }
  loggedIn() {
    return !!localStorage.getItem('token')    
  }


  addChain(data) {
    const url = `http://localhost:3000/mechademy/blockchain`
    return this.http.post<any>(url, data,this.httpOptions)
  }
  getChain(userName) {
    console.log(this.httpOptions);
    
    const url = `http://localhost:3000/mechademy/blockchain/username/${userName}`
    return this.http.get<any>(url,this.httpOptions)
  }
}
