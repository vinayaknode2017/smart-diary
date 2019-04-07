import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { StandardComponent } from '../standard/standard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'standard', loadChildren: '../standard/standard.module#StandardModule'}
      // { path:'standard', component: StandardComponent,
      //   children:[
      //     { path: 'list', loadChildren: '../standard/standard.module#StandardModule'},
      //     { path: '', redirectTo: 'list', pathMatch: 'full'}
      //   ] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
