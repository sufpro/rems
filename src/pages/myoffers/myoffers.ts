import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController,ToastController } from 'ionic-angular';

@Component({
 selector: 'page-myoffers',
  templateUrl: 'myoffers.html'
})
export class MyoffersPage {
  shopssortorder = '';
  shopssortorders = [
    {
      sortLabel: 'Favourite',
      sortField: 'Favourite',
      sortOrder: ''
    },
    {
      sortLabel: 'Lowest Redeemtion Points',
      sortField: 'PointsRedeemDiff',
      sortOrder: ''
    },
    {
      sortLabel: 'Lowest Points Short',
      sortField: 'PointsRedeemDiff',
      sortOrder: ''
    },
    {
      sortLabel: 'Highest Points Collected',
      sortField: 'PointsCollected',
      sortOrder: 'reverse'
    },
    {
      sortLabel: 'Shops Near Me',
      sortField: 'ShopDistance',
      sortOrder: ''
    }
  ];
  cards = [
    {
      imageUrl: '',
      ShopID: '1001',
      title: 'ABHirmal General Store, Dadar (E)',
      Contact: '989933626',
      TotalPurchase: 15000,
      PointsCollected: 900,
      MinPointsRedeem: 5000,
      PointsRedeemDiff: 4100,
      ShopDistance: 0.1, 
      Favourite: 1,
      MyOfferTitle: 'Buy 1 get 1 free on various items',
      MyOfferPoints: '',
      MyOfferStartDate: '01/10/2018',
      MyOfferEndDate: '22/10/2018'
    },
    {
      imageUrl: '',
      ShopID: '1002',
      title: 'Churamal General Store, Dadar (W)',
      Contact: '89554658',
      TotalPurchase: 1000,
      PointsCollected: 9,
      MinPointsRedeem: 1200,
      PointsRedeemDiff: 1191,
      ShopDistance: 1.1, 
      Favourite: 1000,
      MyOfferTitle: '1KG suger free on purchase of 1000Rs of above',
      MyOfferPoints: '',
      MyOfferStartDate: '01/10/2018',
      MyOfferEndDate: '10/10/2018'
    },
    {
      imageUrl: '',
      ShopID: '1003',
      title: 'A Dudes shop, Bandra (E)',
      Contact: '1122112',
      TotalPurchase: 25000,
      PointsCollected: 2000,
      MinPointsRedeem: 5000,
      PointsRedeemDiff: 3000,
      ShopDistance: 2.1, 
      Favourite: 2,
      MyOfferTitle: 'Detol clean 150ml 80Rs only',
      MyOfferPoints: '10',
      MyOfferStartDate: '01/10/2018',
      MyOfferEndDate: '22/10/2018'
    },
    {
      imageUrl: '',
      ShopID: '1004',
      title: 'Baba Gupta, Borivali (E)',
      Contact: '58558478',
      TotalPurchase: 2500,
      PointsCollected: 10,
      MinPointsRedeem: 5000,
      PointsRedeemDiff: 4990,
      ShopDistance: 0.2, 
      Favourite: 1000
    },];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
   ) { }

  ionViewDidLoad() {
  }

  showCon(val) {
    //console.log(val)
  }

  newPurchase(card) {      
    let alert = this.alertCtrl.create({
      title: 'New Purchase',
      inputs: [
        {
          name: 'shopcode',
          placeholder: 'Shop keepers code',
          type: 'password'
        },
        {
          name: 'usercode',
          placeholder: 'App users code',
          type: 'password'
        },
        {
          name: 'trnamount',
          placeholder: 'Transaction Amount',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: data => {
            /*
            if (User.isValid(data.username, data.password)) {
              // logged in!
            } else {
              // invalid login
              return false;
            }
            */

          let toast = this.toastCtrl.create({
            message: 'Transaction was added successfully',
            duration: 3000,
            position: 'bottom'
          });

          toast.onDidDismiss(() => {
            //console.log('Dismissed toast');
          });
          toast.present();
          }
        }
      ]
    });
    alert.present();
  }
}
