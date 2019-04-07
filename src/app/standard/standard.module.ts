import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandardRoutingModule } from './standard-routing.module';
import { ListComponent } from './components/list/list.component';
import { StandardComponent } from './standard.component';

@NgModule({
  declarations: [
    ListComponent, 
    StandardComponent
  ],
  imports: [
    CommonModule,
    StandardRoutingModule
  ]
})
export class StandardModule { }
