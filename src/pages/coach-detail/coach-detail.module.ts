import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoachDetailPage } from './coach-detail';

@NgModule({
  declarations: [
    CoachDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CoachDetailPage),
  ],
})
export class CoachDetailPageModule {}
