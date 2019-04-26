import { Component } from "@angular/core";
import { IonicPage, NavParams, LoadingController } from 'ionic-angular';

// Models
import { Workout, Plan } from "../../models/index.models";

// Services
import { WorkoutService } from "../../services/index.services";
import { Observable } from "rxjs";

@IonicPage()
@Component({
  selector: "page-workouts",
  templateUrl: "workouts.html"
})
export class WorkoutsPage {
  day: string;
  title: string;
  plan: Plan;

  workouts$: Observable<Workout[]>;

  workouts: Workout[];

  chestWorkouts$: Observable<Workout[]>;
  chestWorkouts: Workout[];
  chestId: string = "WEdoqPLgCQjppaWaBFQF";

  shouldersWorkouts$: Observable<Workout[]>;
  shouldersWorkouts: Workout[];
  shoulderId: string = "ut8WLRxSAK6yZ6SDX8YB";

  legsWorkouts$: Observable<Workout[]>;
  legsWorkouts: Workout[];
  legId: string = "Ac1mNbXnZD7X6NzPoZMF";

  backWorkouts$: Observable<Workout[]>;
  backWorkouts: Workout[];
  backId: string = "959r5cLBDU5Ly9AKlZsI";

  armsWorkouts$: Observable<Workout[]>;
  armsWorkouts: Workout[];
  armId: string = "6BFoR3yU3HaFoEfkNlA2";

  constructor(
    public _workoutService: WorkoutService,
    public navParams: NavParams,
    private loadingCtrl: LoadingController
  ) {
    this.day = this.navParams.get("day");

    if(this.navParams.get("item")) {
      this.plan = this.navParams.get("item");
    }
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      spinner: "dots"
    })

    loader.present().then(() => {
      this.loadAllWorkouts().then(() => {
        loader.dismiss();
      })
    })
  }

  async loadAllWorkouts() {

    // We load all the workouts
    this.workouts$ = this._workoutService.getAllWorkouts("planId");

    // We save the this variable because we won't be able to access to the properties inside the firebase function
    let that = this;

    // We save the chest workouts
    this.chestWorkouts$ = this._workoutService.getWorkoutsByDayPlan(this.workouts$, that.chestId);

    // We save the arms workouts
    this.armsWorkouts$ = this._workoutService.getWorkoutsByDayPlan(this.workouts$, that.armId);

    // We save the legs workouts
    this.legsWorkouts$ = this._workoutService.getWorkoutsByDayPlan(this.workouts$, that.legId);

    // We save the back workouts
    this.backWorkouts$ = this._workoutService.getWorkoutsByDayPlan(this.workouts$, that.backId);

    // We save the back workouts
    this.shouldersWorkouts$ = this._workoutService.getWorkoutsByDayPlan(this.workouts$, that.shoulderId);

    if(this.day) {
      switch(this.day) {
        case "Monday": {
          await this.chestWorkouts$
            .subscribe(workouts => that.chestWorkouts = workouts.slice(0,3));
  
          await this.armsWorkouts$
            .subscribe(workouts => that.armsWorkouts = workouts.slice(0,3));
          break;
        }
        case "Tuesday": {
          await this.legsWorkouts$
            .subscribe(workouts => that.legsWorkouts = workouts.slice(0,3));
          break;
        }
        case "Thursday": {
          await this.backWorkouts$
            .subscribe(workouts => that.backWorkouts = workouts.slice(0,3));
          
          await this.shouldersWorkouts$
            .subscribe(workouts => that.shouldersWorkouts = workouts.slice(0,3));
          break;
        }
        case "Friday": {
          await this.backWorkouts$
            .subscribe(workouts => that.legsWorkouts = workouts.slice(0,3));
          break;
        }
      }
    } else {

      await this._workoutService
        .loadWorkoutsByPlan(this.plan.id)
        .subscribe(workouts => {
          this.workouts = workouts;
          this.title = this.plan.name;
        });
    }

  }

}
