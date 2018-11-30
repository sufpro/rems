import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { PopoverController } from 'ionic-angular';

import { AccordionListComponent } from '../../components/accordion-list/accordion-list';
import { AddToCartComponent } from '../../components/addtoCart/addtoCart';

import { ShoppingCartPage } from '../shoppingcart/shoppingcart';
import { Data } from '../../providers/data/data';
import { AddItemPopupPage } from '../additempopup/additempopup';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'page-placeorder',
  templateUrl: 'placeorder.html'
})
export class PlaceOrderPage {
  @ViewChild('slider') slider: Slides;
  slideOneForm: FormGroup;

  shop: any = [];

  constructor(
    public navCtrl: NavController,
    public global: GlobalProvider,
    public popoverCtrl: PopoverController,
    public dataService: Data,
    public formBuilder: FormBuilder, 
    public navParams: NavParams) {

      this.shop = navParams.data.card;
      this.slideOneForm = new FormGroup({});

      this.global.orderArr = [];
      this.global.totCartItems = this.global.orderArr.length;
      this.global.measures = [];
      this.global.purchaseItems = [];

      this.global.measures = this.dataService.getMeasures();
      this.global.purchaseItems = this.dataService.getPurchaseItems();
      /*
      console.log(this.purchaseItems)
      for (let i = 0; i < 20; i++) {
        this.slds_top10.push(this.slds_top10[i % 4]);
        this.slds_fruits.push(this.slds_fruits[i % 4]);
        this.slds_vegies.push(this.slds_vegies[i % 4]);
        this.slds_cosmetics.push(this.slds_cosmetics[i % 4]);
      }
      */
    }
  ionViewDidLoad() {

  }
  ionViewDidEnter() {
    console.log(this.global.orderArr)
  }
  ngAfterViewInit() {

    if(this.slider != undefined)
      this.slider.freeMode = true;
  }

  addRemoveToCart(slide) 
  {
    var resultArray = [];
    if(!slide.addedToCart)
    {
      this.global.orderArr = this.global.searchAndDelete(this.global.orderArr, "id", slide.id);
      this.global.totCartItems = this.global.orderArr.length;
    }

    else
    {
      //Check if its a new item or an old item to be added/updated in cart
      resultArray = this.global.searchByKey(this.global.orderArr, "id", slide.id);
      //New Item to be added onto cart
      if( (resultArray === null) || (resultArray.length === 0) ) 
      {
        this.global.orderID++;
        this.global.orderArr.push({orderID: this.global.orderID,id: slide.id, title: slide.title, selectedUnit: slide.selectedUnit, selectedPrice: slide.selectedPrice, addedToCart: slide.addedToCart, slideBGColor: slide.slideBGColor});
        this.global.totCartItems = this.global.orderArr.length;
      }
      //Existing Item to be updated onto cart
      else
      {
        for(let item of this.global.orderArr)
        {
          if(item.id === slide.id)
          {
            item.selectedUnit = slide.selectedUnit;
            item.selectedPrice = slide.selectedPrice;
            break;
          }
      }
    }
  }
  
  //Update Cart Total
  this.global.setCartTotal();
}

  setSelected(slide) {
  /*
        id: 1004,
        title: 'Tomato Tamatar',

        setUnits: [{unit: 'kg', startrange: 1, endrange: 10,incrementFactor: 5,price: '*1'},{unit: 'gms', startrange: 100, endrange: 200,incrementFactor: 50,price: '/1000'}],

        derivedUnits: [],

        selectedUnit: 0, 
        selectedPrice: 0,
        
        baseUnit: '1kg',
        basePrice: 0,

        slideBGColor: '',
        addedToCart: false
  */
    if(slide.addedToCart)
    {
      var tmpArr;
      tmpArr = this.global.searchByKey(slide.derivedUnits, "unit", slide.selectedUnit);
      if(tmpArr == null)
      {
       slide.selectedPrice = '0'
      }
      else
      {
        slide.selectedPrice = tmpArr.price;
      }
      slide.slideBGColor = 'lightgreen';
    }
    else
    {
      slide.slideBGColor = 'lightgray';
    }
    this.addRemoveToCart(slide)
  }

  

  addItemClicked() {
    let popover = this.popoverCtrl.create(AddItemPopupPage, this.dataService.manualOrderTemplate);
    popover.present();


     popover.onDidDismiss(data => {
      console.log(data);
      /*if(data!=null){
         this.selectedData = data
      }*/
    })


  }  

    setEditable(ev) {
        ev.disabled = !ev.disabled
    }
    
  shoppingCartClicked() {
    this.navCtrl.push(ShoppingCartPage, {shop: this.shop});
  }

  setQty1(curItem,slide,measures,num) {
    var shouldAddToCard = false;
    var tmpQty = 0;
    measures.qty = Number((<HTMLInputElement>document.getElementById(curItem)).value) + num;
    if(measures.qty <= 0){
      measures.qty=0;
    }

    shouldAddToCard = false;
    for(let measure of slide.measures)
    {
      if(measure.qty)
      {
        tmpQty = measure.qty;
        break;
      }
    }
    
    if((tmpQty > 0 && !slide.addedToCart) || (tmpQty<=0 && slide.addedToCart) )
    {
      this.addRemoveToCart(slide)
    }



    if(shouldAddToCard) this.addRemoveToCart(slide);
/*
      if(slide.addedToCart) this.addRemoveToCart(slide);  
      return;
    } 
    if(!slide.addedToCart) this.addRemoveToCart(slide);
*/  
  }
  
  setQty(slide,operation) {
    var tmpArr = this.global.searchByKey(slide.measures, "unit", slide.selectedUnit);
    if(tmpArr == null) return;
    if(operation === '-') {
      (slide.selectedQty - tmpArr.incrementFactor) < 0 ? slide.selectedQty=0 : (slide.selectedQty=slide.selectedQty - tmpArr.incrementFactor)
      console.log(operation, slide.selectedQty)
    }
    else if(operation === '+') {
      slide.selectedQty=slide.selectedQty + tmpArr.incrementFactor
      console.log(operation, slide.selectedQty)
    }
  }

  setupQty(slide){

  }
  rangeArray(qty): any[] {
    var tmpArr = Array();
    for(var ctr=qty.startrange;ctr<=qty.endrange;(ctr = ctr+qty.incrementFactor))
    {
      tmpArr.push(ctr);
    }
    console.log(tmpArr)
    return tmpArr; 
  }
}
