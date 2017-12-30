import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourTripsPage } from './your-trips';

@NgModule({
  declarations: [
    YourTripsPage,
  ],
  imports: [
    IonicPageModule.forChild(YourTripsPage),
  ],
})
export class YourTripsPageModule {}
