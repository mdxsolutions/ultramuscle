import { Component } from "@angular/core";
import {
  NavController,
  IonicPage,
  MenuController,
  LoadingController
} from "ionic-angular";
import { FormGroup, FormControl, Validators } from "@angular/forms";

// Services
import { AlertService } from "../../services/index.services";
import { AuthService } from "../../app/core/auth.service";
import { SettingsProvider } from "../../providers/settings/settings";

@IonicPage()
@Component({
  selector: "page-signin",
  templateUrl: "signin.html"
})
export class SigninPage {
  // The login Form object
  loginForm: FormGroup;

  // The user data from the form
  user: any = {
    email: "",
    password: ""
  };

  // We save if the user is authenticated
  isAuthenticated: boolean;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public alert: AlertService,
    public auth: AuthService,
    public loadingCtrl: LoadingController,
    private _settings: SettingsProvider
  ) {
    // We check if the user is authenticated calling the server
    this.isAuthenticated = this.auth.authenticated;

    // The menu must be disabled because the user has not been authenticated yet
    this.menuCtrl.enable(false, "main");

    // The form data and the validation
    this.loginForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
      ]),
      password: new FormControl("", Validators.required)
    });
  }

  async login(): Promise<void> {
    // We save the data from the form
    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;

    // We will need to access to the properties inside the firestore observable and we won't be able to do it, that's why we save it
    let that = this;

    // We define a loader
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });

    // We start the loader
    loader.present();

    // We check if the user can login or not
    // We try to login with the credentials from the from
    await this.auth
    .emailLogin(this.user.email, this.user.password)
    .then(() => {
      // Succesfull

      // we hide the loader
      loader.dismiss();

      // We set up the local storage adding the user is logged
      this._settings.settings.userLogged = true;
      this._settings.saveStorage();

      // We navigate to TabsPage
      that.navCtrl.setRoot("TabsPage");
    })
    .catch(err => {
      // Unable to login

      // We hide the loader
      loader.dismiss();

      // We show the error in a new alert
      this.alert.presentErrorAlert(err.message);

      // We reset form
      this.loginForm.reset();
    });
  }

  // We check if the user can navigate on SigninPage, just if it is not authenticated
  // ionViewCanEnter(): boolean {
  //   // We check if the user is authenticated
  //   if (this.isAuthenticated) {
  //     // if it is, we navigate to TabsPage and we don't let the user stay in
  //     this.navCtrl.setRoot("TabsPage");
  //     return false;
  //   } else {
  //     // if not, we let the user stay in
  //     return true;
  //   }
  // }
}
