import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelpAndFeedbackPage } from './help-and-feedback';

@NgModule({
  declarations: [
    HelpAndFeedbackPage,
  ],
  imports: [
    IonicPageModule.forChild(HelpAndFeedbackPage),
  ],
})
export class HelpAndFeedbackPageModule {}
