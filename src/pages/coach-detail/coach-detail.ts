import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CoachDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coach-detail',
  templateUrl: 'coach-detail.html',
})
export class CoachDetailPage {

 coachDetail : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.coachDetail=navParams.get('list');
    console.log(this.coachDetail);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoachDetailPage');
  }

}
