import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { TabsPage} from '../tabs/tabs';

//import {FormGroup, FormControl} from '@angular/forms';

//import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

	@ViewChild('username') user;
	@ViewChild('password') password;

  /*langs;
  langForm;*/

  constructor(private fire: AngularFireAuth, public navCtrl: NavController,  public alertCtrl: AlertController) {
    /*this.langForm = new FormGroup({
      "langs": new FormControl({value: 'rust', disabled: false})
    });*/
  }
 

  ionViewDidLoad(){
  	console.log('ionViewDidLoad RegisterPage');
  }

  /*doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }*/

  //Alert
  showAlert(title: string, message: string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  registerUser(){
  	this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
  	.then(data => {
  		console.log('got data ', data);
      this.showAlert('Success','Registered');
      this.navCtrl.setRoot(TabsPage);  		
  	})
  	.catch(error =>{
  		console.log('got an error ', error);
      console.log('WouldRegisterUserWith ', this.user.value, this.password.value);
      this.showAlert('Error',error.message);
  	});

  }
}