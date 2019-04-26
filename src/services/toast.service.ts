import { Injectable } from '@angular/core';
import { Toast, ToastController } from 'ionic-angular';

@Injectable()
export class ToastService {

  toast: Toast;

  constructor(public toastCtrl: ToastController) { }

  create(message, duration = 1000, position = "bottom", closeButton?) {
    if (this.toast) {
      this.toast.dismiss();
    }

    this.toast = this.toastCtrl.create({
      message,
      duration: duration,
      position: position,
      showCloseButton: closeButton,
      closeButtonText: 'x',
    });
    this.toast.present();
  }
}