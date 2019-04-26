import { Injectable } from "@angular/core";

import { Platform } from "ionic-angular";

import { Storage } from "@ionic/storage";

@Injectable()
export class SettingsProvider {
  settings = {
    showTutorial: true,
    userLogged: false
  };

  constructor(private platform: Platform, private storage: Storage) {
  }

  uploadStorage() {
    let promise = new Promise((resolve, reject) => {
      if (this.platform.is("cordova")) {
        // Device
        this.storage.get("settings").then(settings => {
          if (settings) {
            this.settings = settings;
          }
          resolve();
        });
      } else {
        // Desktop
        // We use JSON.parse to become a string to object

        if (localStorage.getItem("settings")) {
          this.settings = JSON.parse(localStorage.getItem("settings"));
        }

        resolve();
      }
    });

    return promise;
  }

  saveStorage() {
    if (this.platform.is("cordova")) {
      // Device
      this.storage.set("settings", this.settings).then(() => {
        this.storage.set("settings", this.settings);
      });
    } else {
      // Desktop
      // We use JSON.stringify to become an object to string

      localStorage.setItem("settings", JSON.stringify(this.settings));
    }
  }
}
