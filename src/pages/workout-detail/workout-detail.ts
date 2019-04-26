import { Component } from "@angular/core";
import { IonicPage, NavParams, PopoverController } from "ionic-angular";

// Models
import { Workout } from "../../models/index.models";

@IonicPage()
@Component({
  selector: "page-workout-detail",
  templateUrl: "workout-detail.html"
})
export class WorkoutDetailPage {
  Tabs: string = "Description";
  levelName: string = "Beginner";
  levelSelected: any = {
    name: "Beginner",
    sets: 4,
    reps: 8
  };
  reps: number = 8;
  workout: Workout;
  name: string = "workouts";
  tabsTitle = [
    {
      name: "Description",
      value: "description"
    },
    {
      name: "Instructions",
      value: "instructions"
    },
    {
      name: "Tips",
      value: "tips"
    }
  ];

  levels = [
    {
      name: "Beginner",
      sets: 4,
      reps: 8
    },
    {
      name: "Intermediate",
      sets: 4,
      reps: 10
    },
    {
      name: "Advanced",
      sets: 4,
      reps: 12
    }
  ];

  constructor(
    public navParams: NavParams,
    public popoverController: PopoverController
  ) {
    this.workout = this.navParams.get("workout");
    this.changeValue("description");
  }

  changeValue(data) {
    this.Tabs = data;
  }

  getLevel(level: string) {
    if (level === "Beginner") {
      this.levelSelected = this.levels[0];
    } 
    
    if (level === "Intermediate") {
      this.levelSelected = this.levels[1];
    } 
    
    if(level === "Advanced") {
      this.levelSelected = this.levels[2];
    }
  }
}
