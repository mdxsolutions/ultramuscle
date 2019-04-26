import { NgModule } from "@angular/core";

// Firebase
import firebaseConfig from "./firebase";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";

// Services
import { AuthService } from "./auth.service";
import { IonicModule } from "ionic-angular";

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [AuthService]
})
export class CoreModule {}
