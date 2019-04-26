import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FullWorkoutPage } from './full-workout';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    FullWorkoutPage,
  ],
  imports: [
    IonicPageModule.forChild(FullWorkoutPage),
    ComponentsModule
  ],
})
export class FullWorkoutPageModule {}
