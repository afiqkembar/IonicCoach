import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GetCoachProvider } from '../providers/get-coach/get-coach';
import { HttpModule } from '@angular/http';
import { CoachListPage } from '../pages/coach-list/coach-list';
import { CoachDetailPage} from '../pages/coach-detail/coach-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CoachListPage,
    CoachDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CoachListPage,
    CoachDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GetCoachProvider
  ]
})
export class AppModule {}
