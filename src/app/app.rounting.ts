import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { 
    path: 'home',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'setting',
    loadChildren: 'app/modules/setting/setting.module#SettingModule'
  },
  { 
    path: '**', 
    redirectTo: '/home',
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

