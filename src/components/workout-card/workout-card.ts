import { Component, Input } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "workout-card",
  templateUrl: "workout-card.html"
})
export class WorkoutCardComponent {
  @Input() workout;

  constructor(public navCtrl: NavController) {}

  // We move to WorkoutDetailPage
  goToWorkoutDetailPage(workout): void {
    // We call the navCtrl service to move to another page and we sent the workout selected
    this.navCtrl.push("WorkoutDetailPage", { workout });
  }
}
