import { Component } from '@angular/core';
import { AddShopsPage } from '../addshops/addshops';
import { MyshopsPage } from '../myshops/myshops';
import { MyoffersPage } from '../myoffers/myoffers';
import { NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import { GlobalProvider } from "../../providers/global/global";
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
	tab1Root = MyshopsPage;
	tab2Root = AddShopsPage;
	tab3Root = MyoffersPage;


  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data, public global: GlobalProvider) {
    
  }

  
  ionViewDidLoad() {
    //console.log('ionViewDidLoad DashboardPage');
  }

  getMyOffersCount() {
    this.global.myOffersCount = 0;
    this.global.myOffersCount = this.dataService.getmyOffersCount()
    return this.global.myOffersCount;
  }

}
