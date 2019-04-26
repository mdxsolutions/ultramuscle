import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, LoadingController } from 'ionic-angular';

// Models
import { Workout, Recipe } from '../../models/index.models';

// Services
import { WorkoutService, NutritionService } from '../../services/index.services';
import { AuthService } from '../../app/core/auth.service';

// Observable / Operators
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  userWorkouts$: Observable<Workout[]>;
  userWorkouts: Workout[] = [];

  userRecipes$: Observable<Recipe[]>;
  userRecipes: Recipe[] = [];

  userActivated: boolean;
  recipes: Recipe[] = [];
  nutritionId: string = "5eVAS6deqZcDlRinTxbK";

  constructor(
    public menuCtrl: MenuController,
    public _workoutService: WorkoutService,
    public _nutritionService: NutritionService,
    public auth: AuthService,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController
  ) {
      this.menuCtrl.enable(true, 'main');
    }

    ionViewDidLoad() {

      let loader = this.loadingCtrl.create({
        spinner: "dots"
      });

      loader.present().then(() => {
        this.loadUserWorkouts();
        this.loadUserRecipes().then(() => {
          loader.dismiss();
        });
      });
    }

    async loadUserWorkouts() {
      // We get all the workouts
      this.userWorkouts$ = await this._workoutService.getAllWorkouts("planId");

      // We save just 3 workouts per user
      this.userWorkouts$.subscribe(workouts => {
        this.userWorkouts = workouts.slice(0,3);
      });
    }

    async loadUserRecipes() {
      this.userRecipes$ = await this._nutritionService.getUserRecipes("5eVAS6deqZcDlRinTxbK");
      this.userRecipes$.subscribe(recipes => {
          this.userRecipes = recipes;
        });
    }

    ionViewCanEnter() {

      let authenticated = this.auth.authenticated;
      
      this.auth.user$.subscribe(() => {
        if(authenticated) {
          return true;
        } else {
          this.navCtrl.setRoot('SigninPage');
          return false;
        }
      });
    }
}
