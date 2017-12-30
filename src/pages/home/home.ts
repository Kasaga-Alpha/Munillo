import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, ToastController } from 'ionic-angular';
import { Platform, LoadingController, ActionSheetController } from 'ionic-angular';
declare var google: any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  //let google: any;
  Start: any;
  End: any; 
  MyLocation: any;

  @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public toastCtrl: ToastController, 
              public actionSheetCtrl: ActionSheetController, public platform: Platform){    
  }

  //Display map immediately
  ionViewDidLoad() {
    this.loadHomeBackgroundMap();
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

  //map init load with userLocation
  loadHomeBackgroundMap() {

    var myLatLng = {lat: 0.3476, lng: 32.5825};

    var map = new google.maps.Map(document.getElementById('map'), {zoom: 12,
          center: myLatLng,
          gestureHandling: 'cooperative',
          mapTypeControl: true,
          mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              position: google.maps.ControlPosition.TOP_RIGHT
          },
          zoomControl: true,
          zoomControlOptions: {
              position: google.maps.ControlPosition.RIGHT_BOTTOM
          },
          scaleControl: true,
          streetViewControl: true,
          streetViewControlOptions: {
              position: google.maps.ControlPosition.RIGHT_BOTTOM
          },
          fullscreenControl: true
        });

        var infoWindow = new google.maps.InfoWindow;

    //Geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        infoWindow.setPosition(pos);
        infoWindow.setContent('My Location.');
        infoWindow.open(map);
        map.setCenter(pos);

        var marker; 
        marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: 'Current Location!'
        });        
      }, 
      function() {
        //handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation 
      //handleLocationError(false, infoWindow, map.getCenter());         
    }

  }

  //map directrions services
  calculateAndDisplayRoute() {

    var myLatLng = {lat: 0.3476, lng: 32.5825};
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 12,
          center: myLatLng,
          gestureHandling: 'cooperative',
          mapTypeControl: true,
          mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              position: google.maps.ControlPosition.TOP_RIGHT
          },
          zoomControl: true,
          zoomControlOptions: {
              position: google.maps.ControlPosition.RIGHT_BOTTOM
          },
          scaleControl: true,
          streetViewControl: true,
          streetViewControlOptions: {
              position: google.maps.ControlPosition.RIGHT_BOTTOM
          },
          fullscreenControl: true
        });

    var directionsFound;
    //Draw directions and show travel agencies
    directionsDisplay.setMap(map);
    directionsService.route({
      origin: this.Start,
      destination: this.End,
      travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response); 
          directionsFound ='true';      
        } else {
          //this.showToastWithCloseButton('bottom', 'Directions Not Found');
          window.alert('Directions Request Failed Due to ' + status);
          directionsFound ='false';
        }
    });

    //Show service providers in an action sheet

    if(directionsFound == 'true') {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Directions Found. Proceed to book a ticket',
        buttons: [
          {
            text: 'Service Providers',
            role: 'destructive',
            handler: () => {
              console.log('Service Providers clicked');
            }
          },{
            text: 'Schedule',
            handler: () => {
              console.log('Schedule clicked');
            }
          },{
            text: 'Payment',
            role: 'cancel',
            handler: () => {
              console.log('Payment clicked');
            }
          }
        ]
      });
      actionSheet.present();
    }
    else{

    }

  }
  
  //travel Means for the travel mode icon button
  travelMeans(){



  }
  

}