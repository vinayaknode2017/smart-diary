import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/components/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
