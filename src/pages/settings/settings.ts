import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav} from 'ionic-angular';
import { LoadingController, ToastController} from 'ionic-angular';

import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  @ViewChild(Nav) nav: Nav;

  constructor(private fire: AngularFireAuth, public loadingCtrl: LoadingController, public navCtrl: NavController,
   public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
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

    this.nav.setRoot(LoginPage);
    this.logoutToast('bottom','      Logged Out      ');
  }

}
