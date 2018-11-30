import { Component } from '@angular/core';
import { AlertController,ToastController} from 'ionic-angular';
import { App, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';


@Component({
    selector: 'page-additempopup',
    templateUrl: 'additempopup.html'
})
export class AddItemPopupPage {

  _heading: string = '';
  _weight: number = 0;
  _peice: number = 0;
  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public navCtrl: NavController,
    public app: App,
    public modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,

  ) { 
    this._heading = navParams.get('title');
    //this._weight = navParams.get('title');
    //this._peice = navParams.get('title');
  }

  dismiss() {
    let data = {
        id: '',
        title: 'Manual Item',
        measures: [{defaultUnit: 'kg' , qty: 1 , otherUnits:['kg','gm','big','small']}],
        slideBGColor: ''
      };
    this.viewCtrl.dismiss(data);
    }
}