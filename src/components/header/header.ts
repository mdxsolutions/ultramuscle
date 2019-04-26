import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  @Input() title: string;
  @Input() goTo: string;

  constructor(
    private navCtrl: NavController
  ) {

  }

  goToPage() {
    this.navCtrl.push(this.goTo);
  }

}
