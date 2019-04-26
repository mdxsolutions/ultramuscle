import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipesPage } from './recipes';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    RecipesPage,
  ],
  imports: [
    IonicPageModule.forChild(RecipesPage),
    ComponentsModule
  ],
})
export class RecipesPageModule {}
