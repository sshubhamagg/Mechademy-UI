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

  loginUser(userName: string , password : string) {
    const url=`http://localhost:3000/mechademy/login/userName/${userName}/password/${password}`
    console.log(url,'test 2');
    
    return this.http.get<any>(url)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
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
  createHeader() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      })
    };

    return httpOptions;
  }


  addChain(data : any) {
    const h = this.createHeader();
    const url = `http://localhost:3000/mechademy/blockchain`;
      console.log(data);
      
    return this.http.post<any>(url, data,h)
  }
  getChain(userName: string) {
    console.log(this.httpOptions, 'http options');
    const url = `http://localhost:3000/mechademy/blockchain/username/${userName}`
    console.log(url, 'url');
    return this.http.get<any>(url,this.createHeader());
  }
}
