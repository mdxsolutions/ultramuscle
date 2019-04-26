import { Component } from '@angular/core';
import { NavController, ToastController, IonicPage, LoadingController } from 'ionic-angular';
// import { UserProvider } from '../../providers/user/user';
import { AuthService } from '../../app/core/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertService } from '../../services/alert.service';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  profileForm: FormGroup;

  user: any = {
    uid: '',
    email: '',
    displayName: '',
    target: '',
    status: true,
  }

  targets: any = [
    {
      name: 'Loose Weight',
    },
    {
      name: 'Mainantence'
    },
    {
      name: 'Build Muscle'
    }
  ];
  country: string = "usa";

  constructor(
    public navCtrl: NavController,
    public toastController: ToastController,
    public auth: AuthService,
    private loadingCtrl: LoadingController,
    private alert: AlertService
  ) {
    // The form data and the validation
   this.profileForm = new FormGroup({
    'displayName': new FormControl('', Validators.required),
    'target': new FormControl('', Validators.required)
  });
  }

  async updateProfile() {

    let that =this;

    // We get the user data from the form
    this.user.uid = this.auth.currentUser.uid;
    this.user.email = this.auth.currentUser.email;
    this.user.displayName = this.profileForm.value.displayName;
    this.user.target = this.profileForm.value.target;
    
    // We create a loading page
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loader.present();

    try {
      await this.auth.updateProfile(this.user)
        .then( (() => {
          loader.dismiss();
          this.presentToast("Profile saved");
        }))
        .catch(err => {
          loader.dismiss();
          this.alert.presentErrorAlert(err.message);
        });

    } catch (err) {
      console.dir(err);
      loader.dismiss();
      this.alert.presentErrorAlert(err.message);
    }
   }

  // updateProfile(): void {
  //   this.presentToast("Profile saved");
  // }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
