import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-full-workout',
  templateUrl: 'full-workout.html',
})
export class FullWorkoutPage {

  days: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {}

}
