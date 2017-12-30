import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelfDrivePage } from './self-drive';

@NgModule({
  declarations: [
    SelfDrivePage,
  ],
  imports: [
    IonicPageModule.forChild(SelfDrivePage),
  ],
})
export class SelfDrivePageModule {}
