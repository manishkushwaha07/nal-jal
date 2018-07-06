import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { 
    path: 'login',
    redirectTo: '/login',
    pathMatch: 'full'
  },
//   {
//     path: 'operator',
//     loadChildren: 'app/modules/operator/operator.module#OperatorModule'
//   },
  { 
    path: '**', 
    redirectTo: '/login',
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

