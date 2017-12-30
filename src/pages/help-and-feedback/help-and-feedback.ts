import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage} from '../signup/signup';

/**
 * Generated class for the HelpAndFeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help-and-feedback',
  templateUrl: 'help-and-feedback.html',
})
export class HelpAndFeedbackPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpAndFeedbackPage');
  }

  signup() {
    this.navCtrl.push(SignupPage)
  }

  forgotPassword(){
    //this.fire.auth.sendPasswordResetEmail();
  }
  sendFeedback(){
    
  }

}
