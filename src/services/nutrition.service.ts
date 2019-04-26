import { Injectable } from '@angular/core';

// Firebase
import {OrderByDirection} from 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';

// Models
import { Nutrition } from '../models/nutrition.model';
import { Recipe } from '../models/recipe.model';

// Operators
import {map, first} from "rxjs/operators";
import { Observable } from 'rxjs';
import { convertSnaps } from './db-utils';


@Injectable()
export class NutritionService {

    constructor(private db: AngularFirestore) {}

    loadAllNutrition(): Observable<Nutrition[]> {
        return this.db.collection(
          'nutrition',
          ref => ref.orderBy('nutritionId'))
        .snapshotChanges()
            .pipe(
              map((snaps) => {
                return snaps.map(snap => {
                    return <Nutrition> {
                      id: snap.payload.doc.id,
                      ...snap.payload.doc.data()
                    }
                });
              }),
              first()
            );
      }

    findRecipes(nutritionId: string, sortOrder: OrderByDirection = 'asc'): Observable<Recipe[]> {
      return this.db.collection(`nutrition/${nutritionId}/recipes`,
        ref => ref.orderBy('nutritionId', sortOrder))
        .snapshotChanges()
        .pipe(
          map(snaps => convertSnaps<Recipe>(snaps)),
          first()
        );
    }

    getUserRecipes(nutritionId: string, sortOrder: OrderByDirection = 'asc'): Observable<Recipe[]> {
      return this.db.collection(`nutrition/${nutritionId}/recipes`,
        ref => ref.orderBy('nutritionId', sortOrder).limit(3))
        .snapshotChanges()
        .pipe(
          map(snaps => convertSnaps<Recipe>(snaps)),
          first()
        );
  }


}
