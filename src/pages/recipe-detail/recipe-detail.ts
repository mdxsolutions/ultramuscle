import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Recipe } from '../../models/index.models';

@IonicPage()
@Component({
  selector: 'page-recipe-detail',
  templateUrl: 'recipe-detail.html',
})
export class RecipeDetailPage {

  recipe: Recipe;
  Tabs: string = "Description";
  tabsTitle = [
    {
      name: "Description",
      value: "description",
    },
    {
      name: "Steps",
      value: "steps",
    },
    {
      name: "Ingredients",
      value: "ingredients",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.recipe = this.navParams.get("item");
    this.changeValue("description");
  }

  changeValue(data) {
    this.Tabs = data;
  }

}
