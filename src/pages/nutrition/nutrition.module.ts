import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NutritionPage } from './nutrition';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    NutritionPage,
  ],
  imports: [
    IonicPageModule.forChild(NutritionPage),
    ComponentsModule
  ],
})
export class NutritionPageModule {}
