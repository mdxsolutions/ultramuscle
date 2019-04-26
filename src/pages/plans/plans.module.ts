import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlansPage } from './plans';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PlansPage,
  ],
  imports: [
    IonicPageModule.forChild(PlansPage),
    ComponentsModule
  ],
})
export class PlansPageModule {}
