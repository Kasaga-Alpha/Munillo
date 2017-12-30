import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google: any;

/**
 * Generated class for the TravelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-travel',
  templateUrl: 'travel.html',
})
export class TravelPage {

	map: any;

	@ViewChild('map') mapRef: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('this.mapRef');
    this.showMap();
  }
  showMap() {
  	//location - lat long
    const location = new google.maps.LatLng(51.507351, -0.127758);
  	
    //Map options
    const options = {
    	center: location,
    	zoom: 10
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);


  }


}