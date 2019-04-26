import { Injectable } from "@angular/core";

// Services
import { ToastService } from "../../services/index.services";

// Firebase
import * as firebase from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";

// Models
import { User } from "../../models/index.models";

// Rxjs/ Operators
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class AuthService {
  user$: Observable<User>;
  userStatus: boolean;

  authState: any = null;
  usersCollectionRef = this.afs.collection("users");

  constructor(
    private afAuth: AngularFireAuth,
    private toast: ToastService,
    private afs: AngularFirestore
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user: any) => {
        if (user) {
          this.userStatus = user.status;
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );

    this.afAuth.authState.subscribe(auth => {
      this.authState = auth;
    });
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns
  get currentUserObservable(): any {
    return this.afAuth.authState;
  }

  // Returns current user UID
  get currentUserId(): string {
    return firebase.auth().currentUser.uid;
  }

  // Anonymous User
  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.isAnonymous : false;
  }

  // Returns current user display name or Guest
  get currentUserDisplayName(): string {
    if (!this.authState) {
      return "Guest";
    } else if (this.currentUserAnonymous) {
      return "Anonymous";
    } else {
      return this.authState["displayName"] || "User without a Name";
    }
  }

  //// Anonymous Auth ////

  anonymousLogin() {
    return this.afAuth.auth
      .signInAnonymously()
      .then(user => {
        this.authState = user;
      })
      .catch(error => console.log(error));
  }

  //// Email/Password Auth ////

  emailSignUp(user: User, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(
      user.email,
      password
    );
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    var auth = firebase.auth();
    return auth
      .sendPasswordResetEmail(email)
      .then(() => {
        this.toast.create("Email sent!");
      })
      .catch(error => console.log(error));
  }

  //// Helpers ////

  createUserDocument(newUser: any, user: User) {
    return this.afs
      .collection("users")
      .doc(newUser.uid)
      .set({
        uid: newUser.uid,
        displayName: user.displayName,
        email: newUser.email,
        target: user.target
      });
  }

  updateProfile(user: User) {
    return this.afs
      .collection("users")
      .doc(user.uid)
      .set({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        target: user.target
      });
  }
}
