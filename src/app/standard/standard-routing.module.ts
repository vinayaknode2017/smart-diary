import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { StandardComponent } from './standard.component';

const routes: Routes = [
  { path: '', component: StandardComponent,
    children: [
      { path: '', component: ListComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandardRoutingModule { }
