import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

// Firebase
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthService } from "./core/auth.service";

// Providers
// import { SettingsProvider } from "../providers/settings/settings";

@Component({
  templateUrl: "app.component.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string;

  elements: any[] = [
    {
      id: 0,
      name: "Dashboard",
      icon: "md-home"
    },
    {
      id: 1,
      name: "Workouts",
      icon: "body"
    },
    {
      id: 2,
      name: "Nutrition",
      icon: "nutrition"
    },
    {
      id: 3,
      name: "Blogs",
      icon: "pricetag"
    }
  ];

  constructor(
    private platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public afAuth: AngularFireAuth,
    public auth: AuthService,
    // private _settings: SettingsProvider
  ) {
    this.initializeApp();
  }

  initializeApp(): void {
    // All the ionic modules are ready loaded
    this.platform.ready().then(() => {

      // this._settings.uploadStorage();

      // console.log(this._settings.settings.userLogged);

      this.rootPage = "SigninPage"

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page): void {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  // Take the user to Profile Page
  goToProfilePage(): void {
    this.nav.setRoot("ProfilePage");
  }

  // Take the user to Tabs Page
  tabsPage(): void {
    this.nav.setRoot("TabsPage");
  }

  // User logout and take the user to Signin Page
  async signOut(): Promise<void> {
    await this.afAuth.auth.signOut();
    this.nav.setRoot("SigninPage");
  }
  // Take the user to Tabs Page wuth the tab selected depending the menu option selected by the user
  goToItemPage(id): void {
    this.nav.setRoot("TabsPage", { tabIndex: id });
  }
}
