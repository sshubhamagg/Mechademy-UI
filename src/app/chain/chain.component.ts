import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-chain',
  templateUrl: './chain.component.html',
  styleUrls: ['./chain.component.css']
})
export class ChainComponent implements OnInit {
  chainData
  user
  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
     this.user=this._auth.getFirstName();
  }

  addBlock () {
   var userName=this._auth.getUserName();
  var block={
    userName:userName,
    data:this.chainData
  }
  console.log('block',block);
  
    this._auth.addChain(block)
    .subscribe(
      res => {
        
        this._router.navigate(['/blockSuccess'])
      },
      err => {
        this._router.navigate(['/register'])}
    ) 
  }


}
