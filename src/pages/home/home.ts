import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{GetCoachProvider} from '../../providers/get-coach/get-coach';
import{CoachListPage} from '../coach-list/coach-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coachCategory: any;

  constructor(public navCtrl: NavController,public navParams:NavParams, public getCoachProvider:GetCoachProvider) {

  }

  ionViewDidLoad(){
    this.getCoachProvider.getApiCategory().subscribe(
      data => {
        console.log(data)
        this.coachCategory = data;
        console.log(this.coachCategory)
      },
      err => {
        console.log(err);
      },
      ()=>{
      console.log('everything is ok!')
    }
    );
  }

  itemTapped(){
    this.navCtrl.push(CoachListPage);
  }
}
