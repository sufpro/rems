import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AlertController,ToastController } from 'ionic-angular';
import { Searchbar  } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import 'rxjs/add/operator/debounceTime';

/**
 * Generated class for the TransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-addshops',
  templateUrl: 'addshops.html',
})
export class AddShopsPage {
    shopLocations = [
      {title:'All'},
      {title:'Dadar'},
      {title:'Borivali'},
      {title:'Kandivali'},
      {title:'Bandra'}
    ];

    @ViewChild('sb') searchbar:Searchbar;
    searchControl: FormControl;
    shops: any = [];
    shop: any;
    shopLocation = '';
    searchTerm: string = '';
    searchResultMessage: string = '';
    searchState: any = -1;
    /*
    Possible search states can be
      -1. Idle state
        - searchState=-1;
        - Show Search Icon=false;
        - Show Shop List=false;
        - Show No Result Message=false;
        - Show Selected Shop=false;

      0. Searching
        - searchState=0;
        - Show Search Icon=true;
        - Show Shop List=false;
        - Show No Result Message=false;
        - Show Selected Shop=false;
      
      1. Search Result Retrieved
        - searchState=1;
        - Show Search Icon=false;
        - Show Shop List=true;
        - Show No Result Message=false;
        - Show Selected Shop=false;

      2. No Search Result found
        - searchState=2;
        - Show Search Icon=false;
        - Show Shop List=false;
        - Show No Result Message=true;
        - Show Selected Shop=false;
    
      3. Search Result Selected
        - searchState=3;
        - Show Search Icon=false;
        - Show Shop List=false;
        - Show No Result Message=false;
        - Show Selected Shop=true;    */

    constructor(
      public navCtrl: NavController, 
      public dataService: Data, 
      private alertCtrl: AlertController,
      private toastCtrl: ToastController,
      ) {
        this.searchControl = new FormControl();
        this.shops = [];
        this.shop = [];
    }
 
    ionViewDidLoad() {
        this.shopLocation = this.shopLocations[0].title;
        //this.getShops();
        /*
        this.searchControl.valueChanges.debounceTime(700).subscribe(search => {           
            this.searchState=0;
            this.getShops();
        });
        */
    }

    resetFilter(ev) {
      ev.target.value = '';
    }

    getShops() 
    {
      this.searchState=0; //Searching
      this.shops = [];
      //this.searchbar.value = '';
      //this.resetFilter(this.searchbar);
      this.shops = this.dataService.getShops([{title: this.searchTerm, Address: this.shopLocation, ShopType: 'newshops'}]);
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

    selectShop(selectedShop) {
      //this.searchbar.clearInput(null);
      this.shop = selectedShop;
      this.searchTerm = this.shop.title;
      this.searchState=3; //Show selected shop
    }
    
    resetSearchState() {
      //Cleanup and reset the searchbar
      this.shops = [];
      this.shop = [];
      this.searchbar.value = '';
      this.searchState = -1;
    }

    newShop(param) {
      var tmpMessage = '';
      var tmpShop: any = [];
      tmpShop=this.dataService.addShops(this.shop)

      if(tmpShop != '')
      {
        tmpMessage = 'Shop added successfully. Visit MyShops page and refresh to see this shop';
        //console.log(tmpShop)
        this.resetSearchState()
      }
      else 
      {
        tmpMessage = 'Failed to add new Shop, please try again';
      }
      
      let toast = this.toastCtrl.create({
        message: tmpMessage,
        duration: 3000,
        position: 'bottom'
      });

      toast.onDidDismiss(() => {
        //console.log('Dismissed toast');
      });
      toast.present();
      //initiate new Purchase if param=purchase
      if(param.toLowerCase() === 'purchase')
      {
          this.newPurchase();
      }
    }


  newPurchase() {      
      let alert = this.alertCtrl.create({
        title: 'New Purchase',
        inputs: [
          {
            name: 'shopcode',
            placeholder: 'Shop keepers code',
            type: 'password',
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
            this.resetSearchState();
            }
          }
        ]
      });
      alert.present();
    }


}
