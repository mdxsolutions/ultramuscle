import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutDetailPage } from './workout-detail';
import { ComponentsModule } from '../../components/components.module';

// Pipes
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    WorkoutDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutDetailPage),
    ComponentsModule,
    PipesModule
  ],
})
export class WorkoutDetailPageModule {}
