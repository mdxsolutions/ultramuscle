import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AuthService } from '../../app/core/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {

  forgotPasswordForm: FormGroup;

  isAuthenticated: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public auth: AuthService,
  ) {

    // We check if the user is authenticated
    this.isAuthenticated = this.auth.authenticated; 

    this.menuCtrl.enable(false, 'main');

    // The form data and the validation
    this.forgotPasswordForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
    });
  }

  resetPassword() {
    this.auth.resetPassword(this.forgotPasswordForm.value.email);
  }

  // ionViewCanEnter():boolean {
  //   if(this.isAuthenticated) {
  //     this.navCtrl.setRoot('TabsPage');
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

}
