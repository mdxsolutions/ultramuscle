import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

// Pages
import { MyApp } from '../app/app.component';

// Modules
import { ComponentsModule } from '../components/components.module';
import { CoreModule } from './core/core.module';

// Services
import { WorkoutService, ToolService, NutritionService, AlertService, ToastService, BlogService } from '../services/index.services';
import { SettingsProvider } from '../providers/settings/settings';

// Plugins
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: false,
      autoFocusAssist: false,
      mode: 'ios'
    }),
    IonicStorageModule.forRoot(),
    CoreModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    WorkoutService,
    ToolService,
    NutritionService,
    AlertService,
    ToastService,
    BlogService,
    SettingsProvider
  ]
})
export class AppModule { }
