import { Injectable } from "@angular/core";

import { convertSnaps } from "./db-utils";

// Firebase
import { AngularFirestore } from "@angular/fire/firestore";

// Models
import { Blog } from "../models/index.models";

// Operators
import { map, first } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class BlogService {
  constructor(private db: AngularFirestore) {}

  // Get all blogs
  getAllBlogs(order: string): Observable<Blog[]> {
    return this.db
      .collection("blogs", ref => ref.orderBy(order))
      .snapshotChanges()
      .pipe(
        map(snaps => convertSnaps<Blog>(snaps)),
        first()
      );
  }
}
