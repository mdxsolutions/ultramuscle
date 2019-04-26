import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';

import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
    NgxErrorsModule,
    ComponentsModule
  ],
})
export class SignupPageModule {}
