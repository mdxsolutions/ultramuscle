import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'category-card',
  templateUrl: 'category-card.html'
})
export class CategoryCardComponent {

  @Input() items;
  @Input() goTo: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {}

  // We move to ItemsPage with the item object
  goToItemsPage(item: any): void {
    this.navCtrl.push(this.goTo, { item });
  }
}
