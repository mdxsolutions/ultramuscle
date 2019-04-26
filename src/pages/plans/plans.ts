import { Component } from "@angular/core";
import { IonicPage, LoadingController } from "ionic-angular";

import { Observable } from "rxjs";

// Models
import { Plan } from "../../models/plan.model";

// Services
import { WorkoutService } from "../../services/index.services";

@IonicPage()
@Component({
  selector: "page-plans",
  templateUrl: "plans.html"
})
export class PlansPage {
  plans$: Observable<Plan[]>;

  constructor(
    public _workoutService: WorkoutService,
    private loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      spinner: "dots"
    });

    loader.present().then(() => {
      this.reloadPlans().then(() => {
        loader.dismiss();
      });
    });
  }

  async reloadPlans() {
    this.plans$ = await this._workoutService.loadAllPlans();
  }
}
