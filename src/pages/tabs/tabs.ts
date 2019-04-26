import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';

// Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../app/core/auth.service';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  userActivated: boolean;
  mySelectedIndex: number;

  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;

  constructor(
    private navParams: NavParams,
    private navCtrl: NavController,
    public afAuth: AngularFireAuth,
    public auth: AuthService
  ) {
    this.mySelectedIndex = this.navParams.data.tabIndex || 0;

    this.tab1 = 'DashboardPage';
    this.tab2 = 'PlansPage';
    this.tab3 = 'NutritionPage';
    this.tab4 = 'BlogsPage';
  }

  // ionViewCanEnter(): boolean {

  //   let authenticated = this.auth.authenticated;

  //   if(authenticated) {
  //     return true;
  //   } else {
  //     this.navCtrl.setRoot('SigninPage');
  //     return false;
  //   }
  // }

}
