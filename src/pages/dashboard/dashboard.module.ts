import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
    IonicModule,
    ComponentsModule
  ]
})
export class DashboardPageModule {}
