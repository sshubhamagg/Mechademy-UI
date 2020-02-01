import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-block-success',
  templateUrl: './block-success.component.html',
  styleUrls: ['./block-success.component.css']
})
export class BlockSuccessComponent implements OnInit {

  user:string;
  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
    this.user=this._auth.getFirstName();
  }

  addBlock(){
    this._router.navigate(['/chain'])
  }
  viewChain(){
    this._router.navigate(['/viewChain'])
  }
}
