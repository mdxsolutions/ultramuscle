import { Component } from "@angular/core";
import {
  NavController,
  IonicPage,
  MenuController,
  LoadingController
} from "ionic-angular";

// Services
import { AlertService, ToastService } from "../../services/index.services";

import { User } from "../../models/user.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../app/core/auth.service";

@IonicPage()
@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {
  // The Register Form object
  registerForm: FormGroup;

  // The user data from the form
  user: User = {
    uid: "",
    displayName: "",
    email: "",
    target: ""
  };

  // We save if the user is authenticated
  isAuthenticated: boolean;

  constructor(
    private navCtrl: NavController,
    private menuCtrl: MenuController,
    private alert: AlertService,
    private toast: ToastService,
    public auth: AuthService,
    public loadingCtrl: LoadingController
  ) {
    // We check if the user is authenticated
    this.isAuthenticated = this.auth.authenticated;

    // The menu must be disabled because the user has not been authenticated
    this.menuCtrl.enable(false, "main");

    // The form data and the validation
    this.registerForm = new FormGroup({
      displayName: new FormControl("", Validators.required),
      target: new FormControl("", Validators.required),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
      ]),
      password: new FormControl("", Validators.required),
      passwordConfirmation: new FormControl("")
    });

    // We add the validation to check if the passwords match
    this.registerForm.controls["passwordConfirmation"].setValidators([
      Validators.required,
      this.passwordCheck.bind(this.registerForm)
    ]);
  }

  // We create a new User
  async createUser() {
    // We get the user data from the form
    this.user.displayName = this.registerForm.value.displayName;
    this.user.target = this.registerForm.value.target;
    this.user.email = this.registerForm.value.email;
    let password = this.registerForm.value.password;

    // We check if the passwords match, if not we show an alert and we don't let the user carry on
    // This function never will execute because we validate the password before the button is enabled
    if (
      this.registerForm.value.password !=
      this.registerForm.value.passwordConfirmation
    ) {
      this.alert.presentErrorAlert("Passwords don't match");
      return;
    }

    // We will need to access to the properties inside the firestore observable and we won't be able to do it, that's why we save it
    let that = this;

    // We create a loading page
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });

    // We start the loader
    loader.present();

    // We check if the user can register or not
    // We try to register the user with the credentials from the from
    await this.auth.emailSignUp(this.user, password)
      .then((newUser) => {
        // Succesfull
        this.auth.createUserDocument(newUser.user, this.user);
         // we hide the loader
         loader.dismiss();

         // We navigate to TabsPage
         that.navCtrl.setRoot("TabsPage");

         // We welcome the user with a toast message
         this.toast.create(`Welcome ${this.user.displayName}`);

        console.log(newUser.user);
      })
      .catch(err => {
        // we hide the loader
        loader.dismiss();
        this.alert.presentErrorAlert(err);
      });
  }

  // Function to check if the passwords match
  passwordCheck(control: FormControl): { [s: string]: boolean } {
    let form: any = this;

    if (control.value !== form.controls["password"].value) {
      return {
        noMatch: true
      };
    }
    return null;
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
