import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GetCoachProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GetCoachProvider {

  constructor(public http: Http) {
    console.log('Hello GetCoachProvider Provider');
  }

  getApiCategory(){
    return this.http.get("https://mysterious-beach-83937.herokuapp.com/categories")
   .map(res => res.json())
  }

  getCoachList(){
    return this.http.get("https://mysterious-beach-83937.herokuapp.com/coaches")
    .map(res => res.json())
  }
}
