import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogsPage } from './blogs';
import { ComponentsModule } from '../../components/components.module';

// Pipes
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    BlogsPage,
  ],
  imports: [
    IonicPageModule.forChild(BlogsPage),
    ComponentsModule,
    PipesModule
  ],
})
export class BlogsPageModule {}
