import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { ComponentsModule } from '../../components/components.module';
import { NgxErrorsModule } from '@ultimate/ngxerrors';


@NgModule({
  declarations: [
      ProfilePage
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    ComponentsModule,
    NgxErrorsModule
  ],
})
export class ProfilePageModule {}
