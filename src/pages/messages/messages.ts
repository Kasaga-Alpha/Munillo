import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { AngularFirestore} from 'angularfire2/firestore';

/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {

	@ViewChild(Nav) nav: Nav;
  userName: string ='';
  message: string ='';
  subscription;
  //messages: object[] = [];

	pages: Array<{title: string, icon: string, component: any}>;
 	pagesBreak: Array<{title: string, icon: string, component: any}>;

  constructor(public db: AngularFirestore, public navCtrl: NavController, public navParams: NavParams) {

    //this.userName = this.navParams.get('userName');
    //this.subscription = this.db.list('/message').subscribe( data => {
      //this.messages = data;
      
    //});
  }

  
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad MessagesPage');
  }

  sendMessages() {
    /*this.db.list('/message').push({
      userName: this.userName,
      message: this.message
    }).then( () => {
        //message is sent
    }).catch( ()=> {
      //some error, maybe firebase is unreacheable
    });
    this.message = '';*/
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
