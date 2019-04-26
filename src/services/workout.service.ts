import { Injectable } from "@angular/core";

import { convertSnaps } from "./db-utils";

// Firebase
import { AngularFirestore } from "@angular/fire/firestore";

// Models
import { Plan, Workout } from "../models/index.models";

// Operators
import { map, first } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class WorkoutService {

  chestId: string = "WEdoqPLgCQjppaWaBFQF";

  constructor(private db: AngularFirestore) {}

  // Get all plans
  loadAllPlans(): Observable<Plan[]> {
    return this.db
      .collection("plans", ref => ref.orderBy("planId"))
      .snapshotChanges()
      .pipe(
        map(snaps => convertSnaps<Plan>(snaps)),
        first()
      );
  }

  // Get all the workouts
  getAllWorkouts(order: string): Observable<Workout[]> {
    return this.db
      .collection("workouts", ref => ref.orderBy(order))
      .snapshotChanges()
      .pipe(
        map(snaps => convertSnaps<Workout>(snaps)),
        first()
      );
  }

  // Get all the workouts by plan selected
  loadWorkoutsByPlan(planId: string): Observable<Workout[]> {
    return this.db
      .collection("workouts", ref => ref.where("planId", "==", planId))
      .snapshotChanges()
      .pipe(
        map(snaps => convertSnaps<Workout>(snaps)),
        first()
      );
  }

  getWorkoutsByDayPlan(workouts$: Observable<Workout[]>, plan: string): Observable<Workout[]> {
    return workouts$
    .pipe(
      map((workouts: any) => workouts.filter((workout: any) => workout.planId === plan))
    );
  }
}
