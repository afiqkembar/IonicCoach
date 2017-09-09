import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GetCoachProvider} from '../../providers/get-coach/get-coach';
import { CoachDetailPage} from '../coach-detail/coach-detail';

/**
 * Generated class for the CoachListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coach-list',
  templateUrl: 'coach-list.html',
})
export class CoachListPage {

  coachList : any;

  constructor(public navCtrl: NavController, public navParams: NavParams , public getCoachProvider:GetCoachProvider) {
  }

  ionViewDidLoad() {
   this.getCoachProvider.getCoachList().subscribe(
     data => {
       console.log(data);
       this.coachList=data;
       console.log(this.coachList);
     },
     err => {
       console.log(err);
     },
     ()=>{
     console.log('everything is ok!')
   }
 );
  }

  itemTapped(list){
    this.navCtrl.push(CoachDetailPage,{list:list})
  }
}
