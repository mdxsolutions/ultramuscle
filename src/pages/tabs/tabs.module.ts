import { NgModule } from '@angular/core';
import { IonicPageModule, MenuController } from 'ionic-angular';
import { TabsPage } from './tabs';

@NgModule({
  declarations: [
      TabsPage
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
  ],
})
export class TabsPageModule {
  constructor(public menuCtrl: MenuController) {
    this.menuCtrl.enable(true, 'main');
  }
}
