import { Component, ViewChild} from '@angular/core';
import { Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import {MessagesPage} from '../pages/messages/messages';
import {SelfDrivePage} from '../pages/self-drive/self-drive';
import {SettingsPage} from '../pages/settings/settings';
import {HelpAndFeedbackPage} from '../pages/help-and-feedback/help-and-feedback';
import {ContactPage} from '../pages/contact/contact';
import {LegalPage} from '../pages/legal/legal';
import {AboutPage} from '../pages/about/about';
import { ToastController, LoadingController} from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp { 
  @ViewChild(Nav) nav: Nav;
  userName: string = '';
  passWord: string = '';

  email: string;
  rootPage:any = LoginPage;
  pages: Array<{title: string, icon: string, component: any}>;
  pagesBreak: Array<{title: string, icon: string, component: any}>;
  logout: Array<{title: string, icon: string, component: any}>;

  constructor(private fire: AngularFireAuth, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, 
    public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
   /*platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });*/

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Messages', icon: 'mail', component: MessagesPage },
      { title: 'Self Drive', icon: 'compass', component: SelfDrivePage },
      { title: 'Plan Travel', icon: 'home', component: HomePage },
    ];
     this.pagesBreak = [
      { title: 'Contact-Us', icon: 'contacts', component: ContactPage },
      { title: 'Legal', icon: 'eye', component: LegalPage },
      { title: 'Version', icon: 'information-circle', component: AboutPage },
      { title: 'Settings', icon: 'settings', component: SettingsPage },
      { title: 'Help & Feedback', icon: 'help-circle', component: HelpAndFeedbackPage },
    ];
    this.logout = [
      { title: 'User Logout', icon: 'log-out', component: LoginPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

 
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  //LogOut toast
  logoutToast(position: string, message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      cssClass: 'toast',
      position: position
    });
    toast.present();
  }

  logOutUser(page) {

    this.fire.auth.signOut();

    let loader = this.loadingCtrl.create({
    content: "Logging Out...",
    duration: 2000
    });
    loader.present();

    this.nav.setRoot(page.component);
    this.logoutToast('bottom','      Logged Out      ');
  }

}

