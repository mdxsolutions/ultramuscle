import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SigninPage } from './signin';

import { NgxErrorsModule } from '@ultimate/ngxerrors';

// Components
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SigninPage,
  ],
  imports: [
    IonicPageModule.forChild(SigninPage),
    NgxErrorsModule,
    ComponentsModule
  ],
})
export class SigninPageModule {}
