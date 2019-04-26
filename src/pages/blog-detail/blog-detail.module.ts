import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogDetailPage } from './blog-detail';
import { ComponentsModule } from '../../components/components.module';

// Pipes
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    BlogDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BlogDetailPage),
    ComponentsModule,
    PipesModule
  ],
})
export class BlogDetailPageModule {}
