import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'nutrition-card',
  templateUrl: 'nutrition-card.html'
})
export class NutritionCardComponent {

  @Input() items;
  @Input() goTo: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) { }

  // We move to ItemsPage with the item object
  goToItemsPage(item: any): void {
    this.navCtrl.push(this.goTo, { item });
  }
}
