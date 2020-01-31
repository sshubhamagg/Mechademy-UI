import { Component, OnInit,NgModule } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import {ChainComponent} from '../chain/chain.component';
@Component({
  selector: 'app-view-chain',
  templateUrl: './view-chain.component.html',
  styleUrls: ['./view-chain.component.css']
})

@NgModule({
  imports: [ BrowserModule ],
  declarations: [  ChainComponent ],
})

export class ViewChainComponent implements OnInit {
   userName: string;
   blocks: any = '';
  constructor(private _auth: AuthService,
    private _router: Router) { }

    ngOnInit() {
      this.init();
}

  init() {
    this.userName=this._auth.getUserName();
    console.log(this.userName,'this.username');
    
     this._auth.getChain(this.userName)
     .subscribe(
       res => {
        console.log('res',res);
       this.blocks=res.data.chain;
        //  this._router.navigate(['/login'])
       },
       err => {
         console.log(err,'err');
         
         this._router.navigate(['/error'])}
     ) 
  }

}
