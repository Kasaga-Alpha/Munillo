import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payments',
  templateUrl: 'payments.html',
})
export class PaymentsPage {


	payments = ["Angular 4", "React", "Underscore"];
	newPayment = "";

	pushPaymet = function(){
		if(this.newPayment != ""){
			this.payments.push(this.newPayment);
			this.newPayment = "";
		}
	}
	removePaymet = function(index){
		this.payments.splice(index, 1);
	}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentsPage');
  }

}
