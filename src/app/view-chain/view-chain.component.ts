import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-view-chain',
  templateUrl: './view-chain.component.html',
  styleUrls: ['./view-chain.component.css']
})
export class ViewChainComponent implements OnInit {
   userName
   blocks
  constructor(private _auth: AuthService,
    private _router: Router) { }

    ngOnInit() {
      this.userName=this._auth.getUserName();

   
     this._auth.getChain(this.userName)
     .subscribe(
       res => {
        console.log('res',res);
      this.blocks=res.data.chain;
        //  this._router.navigate(['/login'])
       },
       err => {

         this._router.navigate(['/register'])}
     ) 

}
}
