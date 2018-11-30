import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController, ToastController  } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';

@Component({
    selector: 'page-shoppingcart',
    templateUrl: 'shoppingcart.html'
})
export class ShoppingCartPage {
    shop : Array<any> = [];
    shoppingItems: Array<any> = [];
    shoppingItem: string;
    constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,private toastCtrl: ToastController, public global: GlobalProvider) {
        this.shop = navParams.data.shop
    }

    shoopingItemClicked(sItem, unitSelected)
    {
        this.showAlert(sItem, unitSelected)
    }


  showAlert(sItem, unitSelected) {
    //console.log(sItem.measures[unitSelected])
    const alert = this.alertCtrl.create();
    alert.setTitle('Edit Order');
    //alert.addMessage('Enter a name for this new album you\'re so keen on adding');
    
    
    for (var i=0; i < sItem.measures[unitSelected].otherUnits.length; i++) {
        alert.addInput({
          type: 'radio',
          label: sItem.measures[unitSelected].otherUnits[i],
          value: sItem.measures[unitSelected].otherUnits[i],
          checked: (sItem.measures[unitSelected].otherUnits[i].toLowerCase() == sItem.measures[unitSelected].defaultUnit.toLowerCase())
        });
    }
    alert.addInput({
        name: 'qtyText',
        placeholder: 'Enter Quantity',
        value: sItem.measures[unitSelected].qty
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        if(data.toLowerCase() != sItem.measures[unitSelected].defaultUnit.toLowerCase())
        {
            //update DefaultUnit
            sItem.measures[unitSelected].defaultUnit=data;
            console.log('Radio data:', this.shoppingItems);
        }
      }
    });

    alert.present();
  }


    setEditable(ev) {
        ev.disabled = !ev.disabled
    }

    add() {
        this.shoppingItems.push({id: this.shoppingItem, title: this.shoppingItem, qty: 1, unit: 'piece'});
        this.shoppingItem = "";
    }

    delete(sItem) {
        var index = this.shoppingItems.indexOf(sItem, 0);
        if (index > -1) {
            this.shoppingItems.splice(sItem, 1);
        }
    }

    submitOrder() {
        let toast = this.toastCtrl.create({
        message: 'Your new order was placed successfully with ',
        duration: 3000,
        position: 'bottom'
      });

      toast.onDidDismiss(() => {
        //console.log('Dismissed toast');
      });
      toast.present();
      this.navCtrl.popTo( this.navCtrl.getByIndex(0));
    }

    removeFromCart(slide) {
        //Update PurchaseItem Array
        for(let item of this.global.purchaseItems[0].items)
        {
          if(item.id === slide.id)
          {
            item.selectedPrice = item.basePrice;
            item.selectedUnit = item.baseUnit;
            item.addedToCart = false;
            item.slideBGColor = 'lightgrey';
            break;
          }
        }

        //Update Shopping Cart Array
        this.global.orderArr = this.global.searchAndDelete(this.global.orderArr, "id", slide.id);
        this.global.totCartItems = this.global.orderArr.length; 
        
        //Update Cart Total
        this.global.setCartTotal();
  }

}