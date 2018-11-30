import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverController, AlertController,ToastController } from 'ionic-angular';
import { MypurchasesPage } from '../mypurchases/mypurchases';
import { PlaceOrderPage } from '../placeorder/placeorder';
import { Data } from '../../providers/data/data';
import { GlobalProvider } from '../../providers/global/global';

@Component({
 selector: 'page-myshops',
  templateUrl: 'myshops.html'
})

export class MyshopsPage {
  shops: any;
  shopLocation = 'All';
  pointsProgress: any = [];
  purchaseProgress: any = [];

  searchState: any = -1;
  searchTerm = '';
  searchResultMessage = '';

  sortOrder_Default = '';
  showSortOrder = false;
  sortOrders: any [];  
    constructor(
      public navCtrl: NavController,
      public navParams: NavParams, 
      public popoverCtrl: PopoverController,
      private toastCtrl: ToastController,
      private alertCtrl: AlertController, 
      public dataService: Data,
      public global: GlobalProvider
    ) { 
      this.pointsProgress = {
        current: 2000,
        max: 5000,
        stroke: 10,
        radius: 30,
        semicircle: false,
        rounded: false,
        responsive: false,
        clockwise: true,
        color: 'darkviolet',
        background: '#eaeaea',
        duration: 800,
        animation: 'easeOutCubic',
        animationDelay: 0,
        animations: [],
        gradient: false,
        realCurrent: 0,
        rate:0
      }
      this.purchaseProgress = {
        totalPurchase: 5000,
        max: 5000,
        stroke: 10,
        radius: 30,
        semicircle: true,
        rounded: false,
        responsive: false,
        clockwise: true,
        color: 'darkviolet',
        background: '#eaeaea',
        duration: 800,
        animation: 'easeOutCubic',
        animationDelay: 0,
        animations: [],
        gradient: false,
        realCurrent: 0,
        rate:0
      }
    }

  ionViewDidLoad() {
    this.getDefaultSortOrder();
    this.getSortOrders();
    this.getShops();
  }


  doRefresh(refresher) 
  {
      //console.log('Begin async operation', refresher);

      setTimeout(() => {
        //console.log('Async operation has ended');
        this.getShops();
        if(this.showSortOrder) {
          this.sortCards();
        }
        refresher.complete();
      }, 2000);
    }

  getShops() 
  {
    this.searchState=0; //Searching
    this.shops = [];
    this.shops = this.dataService.getShops([{title: this.searchTerm, Address: this.shopLocation, ShopType: 'addedshops'}]);
    if(this.shops.length > 0)
    {
      this.searchState=1; //Show Search result
      //console.log(this.shops);
    }
    else  //Show no search result message
    {
      this.searchResultMessage="No result found, please change shop location or name";
      this.searchState=2; 
    }
  }

  getSortOrders() 
  {
    this.searchState=0; //Searching
    this.sortOrders = [];
    this.sortOrders = this.dataService.getSortOrders();
    if(this.sortOrders.length > 0)
    {
      this.searchState=1; //Show Search result
      this.showSortOrder=true;
      this.sortOrder_Default = this.sortOrders[0].sortLabel;

    }
    else  //Show no search result message
    {
      this.showSortOrder=false;
      this.searchState=2; 
    }
    //console.log(this.showSortOrder);
  }


  getDefaultSortOrder(){
    this.sortOrder_Default = this.dataService.getDefaultSortOrder();
  }

 
  sortCards(){
    this.displayToast("Sorting of Shops - Started");
    //Get selected sort's details from sortArray
    var resultArray = this.global.searchByKey(this.sortOrders, "sortLabel", this.sortOrder_Default);
    //console.log(resultArray)
    //Sort Cards based on selected sort's sortField
    this.shops = this.global.sortByKey(this.shops, resultArray['sortField']);

    //Sort Cards based on selected sort's sortOrder
    if(resultArray["sortOrder"] === 'reverse') {
    this.shops.reverse();
    }
    this.displayToast("Sorting of Shops - Completed");
  }
    
  cardTapped(card) {
    alert(card.title + ' was tapped.' + card.TotalPurchase);
  }

  followersTapped(card) {
    alert(card.title + ' followers tapped.');
  }

  totPurchaseTapped(card) {
    this.navCtrl.push(MypurchasesPage, {card});
  }

  sortIconClicked(card) 
  {
    //console.log('sortIconClicked')
  }

  favIconClicked(card) {
    for (var i=0; i < this.shops.length; i++) {
      if (this.shops[i].ShopID === card.ShopID) {
          //Check and Set Favourite
          if(this.shops[i].Favourite == 1000)
          {
            var tmpVal = this.getMaxFavVal(this.shops, "Favourite");
            this.shops[i].Favourite = tmpVal.Favourite + 1;
          }
          //Check and Remove Favourite
          else {
            this.shops[i].Favourite = 1000;
          }
          
          //Form Favourite Set/Remove message and display
          var message = this.shops[i].Favourite < 1000 ? "Favourite added" : "Favourite removed";
          this.displayToast(message);

          //Check if Re-Sorting is required and re-sort
          if(this.showSortOrder) {
            if(this.sortOrder_Default == this.sortOrders[0].sortLabel)
            {
              message += ", Re-sorting Shops now"
              this.displayToast(message);
              this.sortCards();
            }
          }
          return;
       }
    } 
  }

  displayToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      //console.log('Dismissed toast');
    });
    toast.present();
  }

  getMaxFavVal(arr, arr_element) {
    var max = this.shops[0];
    for (var ctr=0 ; ctr<arr.length ; ctr++) 
    {
      if(parseInt(arr[ctr][arr_element]) < 1000)
      {
        if ( parseInt(arr[ctr][arr_element]) > parseInt(max[arr_element]) )
        {
          max = arr[ctr];
        }
      }
    }
    return max;
  }


  showCon(val) {
    //console.log(val)
  }

  placeorder(card) {
    this.navCtrl.push(PlaceOrderPage, {card});
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
