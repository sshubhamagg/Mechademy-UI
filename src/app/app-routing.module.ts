import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { AuthGuard } from './auth.guard';
import { ChainComponent } from './chain/chain.component';
import { BlockSuccessComponent } from './block-success/block-success.component';
import { ViewChainComponent } from './view-chain/view-chain.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'chain',
    component: ChainComponent
  },
  {
    path:'blockSuccess',
    component:BlockSuccessComponent
  },
  {
    path:'viewChain',
    component:ViewChainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
