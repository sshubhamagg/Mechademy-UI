import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-chain',
  templateUrl: './chain.component.html',
  styleUrls: ['./chain.component.css']
})
export class ChainComponent implements OnInit {
  chainData : any;
  user: any;
  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
     this.user=this._auth.getFirstName();
  }

  addBlock () {
   var userName=this._auth.getUserName();
  var block : any ={
    userName:userName,
    data:this.chainData
  }
  console.log('block',block);
  
    this._auth.addChain(block)
    .subscribe(
      res => {
        console.log(res,'res');
        this._router.navigate(['/blockSuccess'])
      },
      err => {
        this._router.navigate(['/error'])}
    ) 
  }


}
