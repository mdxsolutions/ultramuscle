import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'weekly-card',
  templateUrl: 'weekly-card.html'
})
export class WeeklyCardComponent {

  @Input() day: string;

  constructor(
    public navCtrl: NavController,
    private toast: ToastService
  ) {}

  goToWorkoutsPage() {
    if((this.day === "Wednesday") || (this.day === "Sunday")) {
      this.toast.create("Rest day");
      return;
    }

    this.navCtrl.push("WorkoutsPage",{day:  this.day});
  }
}
