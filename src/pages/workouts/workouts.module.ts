import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutsPage } from './workouts';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    WorkoutsPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutsPage),
    ComponentsModule
  ],
  providers: []
})
export class WorkoutsPageModule {}
