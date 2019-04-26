import { Component } from '@angular/core';
import { IonicPage, LoadingController } from 'ionic-angular';

import {Observable} from "rxjs";

// Models
import { Nutrition } from '../../models/nutrition.model';

// Services
import { NutritionService } from '../../services/index.services';

@IonicPage()
@Component({
  selector: 'page-nutrition',
  templateUrl: 'nutrition.html',
})
export class NutritionPage {

  nutritions$: Observable<Nutrition[]>;

  constructor(
    public _nutritionService: NutritionService,
    private loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      spinner: "dots"
    });

    loader.present().then(() => {
      this.reloadNutrition().then(() => {
        loader.dismiss();
      });
    });
  }

  async reloadNutrition() {
    this.nutritions$ = await this._nutritionService.loadAllNutrition();
  }

}
