import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage} from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

//SideMenuPages
import {MessagesPage} from '../pages/messages/messages';
import {YourTripsPage} from '../pages/your-trips/your-trips';
import {PaymentsPage} from '../pages/payments/payments';
import {SelfDrivePage} from '../pages/self-drive/self-drive';
import {SettingsPage} from '../pages/settings/settings';
import {HelpAndFeedbackPage} from '../pages/help-and-feedback/help-and-feedback';
import {ContactPage} from '../pages/contact/contact';
import {LegalPage} from '../pages/legal/legal';
import {AboutPage} from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

const config = {
    apiKey: "AIzaSyCI4K6UoapvSFGd5ykSgh3B66sdMrRQewU",
    authDomain: "idealtravel-3a941.firebaseapp.com",
    databaseURL: "https://idealtravel-3a941.firebaseio.com",
    projectId: "idealtravel-3a941",
    storageBucket: "idealtravel-3a941.appspot.com",
    messagingSenderId: "597880047246"
  };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    SignupPage,
    TabsPage,
    //SideMenu pages
    MessagesPage,
    YourTripsPage,
    PaymentsPage,
    SelfDrivePage,
    SettingsPage,
    HelpAndFeedbackPage,
    ContactPage,
    LegalPage,
    AboutPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    SignupPage,
    TabsPage,
    //SideMenu pages
    MessagesPage,
    YourTripsPage,
    PaymentsPage,
    SelfDrivePage,
    SettingsPage,
    HelpAndFeedbackPage,
    ContactPage,
    LegalPage,
    AboutPage
  ],   

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
