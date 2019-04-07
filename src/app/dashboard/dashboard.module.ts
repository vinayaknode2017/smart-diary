import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardFooterComponent } from './components/dashboard-footer/dashboard-footer.component';
import { DashboardLeftMenuComponent } from './components/dashboard-left-menu/dashboard-left-menu.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardComponent } from './dashboard.component';
import { StandardModule } from '../standard/standard.module';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent, 
    DashboardFooterComponent, 
    DashboardLeftMenuComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
