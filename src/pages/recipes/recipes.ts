import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

// Models
import { Nutrition, Recipe } from '../../models/index.models';

// Services
import { NutritionService } from '../../services/index.services';

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {

  recipes: Recipe[] = [];
  nutrition: Nutrition;
  title: string = "Recipes";
  pageTitle: string = "Nutrition";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _nutritionsService: NutritionService,
    private loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      spinner: "dots"
    });

    loader.present().then(() => {
      this.loadAllRecipes().then(() => {
        loader.dismiss();
      });
    });
  }

  async loadAllRecipes() {
    this.nutrition = this.navParams.get("item");
    await this._nutritionsService.findRecipes(this.nutrition.id)
      .subscribe(recipes => {
        this.recipes = recipes;
        this.title = this.nutrition.name;
      });
  }

}
