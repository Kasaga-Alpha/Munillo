import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { ToastController, LoadingController } from 'ionic-angular';
import { HomePage} from '../home/home';
import { SignupPage} from '../signup/signup';
import { AngularFireAuth } from 'angularfire2/auth';

//import firebase from 'firebase';
import * as firebase from 'firebase/app';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    provider = {
    loggedIn: '',
    name: '',
    profilePicture: '',
    email: ''
  }

  userName: string = '';
  password: string = '';

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public loadingCtrl: LoadingController,
   public navParams: NavParams, public toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //Success toast
  presentToast(position: string, message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      cssClass: 'toast',
    });
    toast.present();
  }

  //Failure Toast
  showToastWithCloseButton(position: string, message: string) {
    const toast = this.toastCtrl.create({
      message: message,
      position: position,
      showCloseButton: true,
      closeButtonText: 'OK'
    });
    toast.present();
  }

  //<!-- System Access -->
  loginAccess() {

    let loader = this.loadingCtrl.create({
    content: "Loading Account...",
    duration: 2000
    });
    loader.present();
        
      this.navCtrl.setRoot(HomePage, {userName: this.userName});
      this.presentToast('bottom','      Logged in      ');

  }
  
  //<!-- Login button -->
  loginEmail() {

    let loader = this.loadingCtrl.create({
    content: "Loading Account...",
    duration: 2000
    });
    loader.present();

    if(this.userName !== '' && this.password !== ''){

      this.fire.auth.signInWithEmailAndPassword(this.userName, this.password)
      .then(data => {
        console.log('got some data', this.fire.auth.currentUser);
        
      //User is logged in
        
      this.navCtrl.setRoot(HomePage, {userName: this.userName});
      this.presentToast('bottom','      Logged in  With Email    ');

      })
      .catch(error => {
        this.showToastWithCloseButton('bottom', error.message);
      }) 

    }else if(this.userName == '' && this.password == ''){
      this.showToastWithCloseButton('bottom', 'Please input your Username and Password');
    }

  }

  //Social login
  login(provider){
    let signInProvider = null;
    switch (provider) {
      case "twitter":
        signInProvider = new firebase.auth.TwitterAuthProvider()

        break;
      case "facebook":
        signInProvider = new firebase.auth.FacebookAuthProvider()

        break;
      case "google":
        signInProvider = new firebase.auth.GoogleAuthProvider()
        
        break;

      default:
        //code
        break;
    }

    this.fire.auth.signInWithPopup(signInProvider)
    .then(res => {
      console.log('Logging in with - '+ provider);
      this.provider.loggedIn = 'true';
      this.provider.name = res.user.displayName;
      this.provider.email = res.user.email;
      this.provider.profilePicture = res.user.photoURL;
      console.log(res);

    //User is logged in      
    this.navCtrl.setRoot(HomePage, {userName: this.userName});
    this.presentToast('bottom','      Logged in With       '+ provider);

    })
    .catch(error => {
      this.showToastWithCloseButton('bottom', error.message);
    }) 

  }

  //<!-- SignUp button -->
  signup() {
    this.navCtrl.push(SignupPage)
  }

  forgotPassword(){
    //this.fire.auth.sendPasswordResetEmail();
  }

  loginOutOfFacebook(){
    this.fire.auth.signOut();
    //this.facebook.loggedIn = false;
  }

}