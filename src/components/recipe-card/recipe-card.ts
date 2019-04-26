import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'recipe-card',
  templateUrl: 'recipe-card.html'
})
export class RecipeCardComponent {

  @Input() item;
  @Input() goTo: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  goToItemDetail(item): void {
    // We call the navCtrl service to move to another page and we sent the workout selected
    this.navCtrl.push(this.goTo, { item })
  }

}
