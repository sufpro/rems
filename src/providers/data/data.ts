import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the Data provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Data {

/*--MyShops screen - Start--*/
  sortOrder_Default: string = "";
  sortOrders: any = [];
	shopNames: any = [];
  shopDetails: any = [];
/*--MyShops screen - End--*/  

/*--Place order screen - Start--*/
  measures: any = [];
  purchaseItems: any = [];
  manualOrderTemplate: any = [];
/*--Place order screen - End--*/

constructor(public http: Http) { 
/*--MyShops screen - Start--*/
  this.sortOrders = [
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
  }];

  this.shopNames = [
      {title: 'Hirmal General Store, Dadar (E)'},
      {title: 'Churamal General Store, Dadar (W)'},
      {title: 'A Dudes shop, Bandra (E)'},
      {title: 'Baba Gupta, Borivali (E)'}
  ];
  
  this.shopDetails = [
  {
    imageUrl: '',
    ShopID: '1001',
    title: 'Hirmal General Store',
    Address: 'Dadar (E)',
    Contact: '989933626',
    TotalPurchase: 15000,
    PointsCollected: 1900,
    MinPointsRedeem: 5000,
    PointsRedeemDiff: 4100,
    ShopDistance: 0.1, 
    Favourite: 1
  },
  {
    imageUrl: '',
    ShopID: '1002',
    title: 'Churamal General Store',
    Address: 'Dadar (W)',
    Contact: '89554658',
    TotalPurchase: 1000,
    PointsCollected: 9,
    MinPointsRedeem: 1200,
    PointsRedeemDiff: 1191,
    ShopDistance: 1.1, 
    Favourite: 1000
  },
  {
    imageUrl: '',
    ShopID: '1003',
    title: 'A Dudes shop',
    Address: 'Bandra (E)',
    Contact: '1122112',
    TotalPurchase: 25000,
    PointsCollected: 2000,
    MinPointsRedeem: 5000,
    PointsRedeemDiff: 3000,
    ShopDistance: 2.1, 
    Favourite: 2
  },
  {
    imageUrl: '',
    ShopID: '1004',
    title: 'Baba Gupta',
    Address: 'Borivali (E)',
    Contact: '58558478',
    TotalPurchase: 2500,
    PointsCollected: 10,
    MinPointsRedeem: 5000,
    PointsRedeemDiff: 4990,
    ShopDistance: 0.2, 
    Favourite: 1000
  }];
/*--MyShops screen - End--*/

/*--Place Order screen - Start--*/  
  this.measures = [
      {
        units: ['kg','gm', 'big','small']
      },
      {
        units: ['pc','pkt']
      }
    ];

  this.manualOrderTemplate = {
        id: '',
        title: 'Manual Item',
        measures: [{defaultUnit: 'small' , qty: 0 , otherUnits:['kg','gm','big','small']},{defaultUnit: 'pkt' , qty: 0 , otherUnits:['pc','pkt']}],
        slideBGColor: '',
        addedToCart: false
      };

  this.purchaseItems = [{
    category: 'Top most ordered Products',
    items: [
      {
        id: 1004,
        title: 'Tomato Tamatar',

        setUnits: [{unit: 'kg', startrange: 1, endrange: 10,incrementFactor: 5,price: ''},{unit: 'gms', startrange: 100, endrange: 200,incrementFactor: 50,price: '/1000'}],
      
        baseUnit: '1kg',
        basePrice: 100,

        selectedUnit: 0, 
        selectedPrice: 0,
        
        derivedUnits: [],

        slideBGColor: 'lightgrey',
        addedToCart: false
      },
      {
        id: 1005,
        title: 'Potato Aloo',
                
        setUnits: [{unit: 'kg', startrange: 1, endrange: 10,incrementFactor: 5,price: '*1'},{unit: 'gms', startrange: 100, endrange: 200,incrementFactor: 50,price: '/1000'}],

        baseUnit: '1kg',
        basePrice: 40,

        selectedUnit: 0, 
        selectedPrice: 0,
        
        derivedUnits: [],

        slideBGColor: 'lightgray',
        addedToCart: false
      },
      {
        id: 1009,
        title: 'AANAR',
        
        setUnits: [{unit: 'kg', startrange: 1, endrange: 10,incrementFactor: 5,price: '*1'},{unit: 'gms', startrange: 100, endrange: 200,incrementFactor: 50,price: '/1000'}],
      
        baseUnit: '1kg',
        basePrice: 120,

        selectedUnit: 0, 
        selectedPrice: 0,
        
        derivedUnits: [],

        slideBGColor: 'lightgray',
        addedToCart: false
      },
      {
        id: 1010,
        title: 'ORANGE SANTRA',
        
        setUnits: [{unit: 'kg', startrange: 1, endrange: 10,incrementFactor: 5,price: '*1'},{unit: 'gms', startrange: 100, endrange: 200,incrementFactor: 50,price: '/1000'}],
      
        baseUnit: '1kg',
        basePrice: 75,

        selectedUnit: 0, 
        selectedPrice: 0,
        
        derivedUnits: [],

        slideBGColor: 'lightgray',
        addedToCart: false
      },
      {
        id: 1014,
        title: 'Powder',
        
        setUnits: [{unit: 'gms', startrange: 100, endrange: 500,incrementFactor: 50,price: '/1000'}],
      
        baseUnit: '500gms',
        basePrice: 85,

        selectedUnit: 0, 
        selectedPrice: 0,
        
        derivedUnits: [],

        slideBGColor: 'lightgray',
        addedToCart: false
      },
      {
        id: 1015,
        title: 'Shampoo',

        setUnits: [{unit: 'gms', startrange: 100, endrange: 500,incrementFactor: 50,price: '/1000'}],
      
        baseUnit: '500gms',
        basePrice: 40,

        selectedUnit: 0, 
        selectedPrice: 0,
        
        derivedUnits: [],

        slideBGColor: 'lightgray',
        addedToCart: false      
      }]
    },
  {
    category: 'Vegetables',
    items: [
      {
        id: 1004,
        title: 'Tomato Tamatar',

        setUnits: [{unit: 'kg', startrange: 1, endrange: 10,incrementFactor: 5,price: '*1'},{unit: 'gms', startrange: 100, endrange: 200,incrementFactor: 50,price: '/1000'}],
      
        baseUnit: '1kg',
        basePrice: 100,

        selectedUnit: 0, 
        selectedPrice: 0,
        
        derivedUnits: [],

        slideBGColor: 'lightgray',
        addedToCart: false
      },
      {
        id: 1005,
        title: 'Potato Aloo',
                
        setUnits: [{unit: 'kg', startrange: 1, endrange: 10,incrementFactor: 5,price: '*1'},{unit: 'gms', startrange: 100, endrange: 200,incrementFactor: 50,price: '/1000'}],

        baseUnit: '1kg',
        basePrice: 40,

        selectedUnit: 0, 
        selectedPrice: 0,
        
        derivedUnits: [],

        slideBGColor: 'lightgray',
        addedToCart: false
      },
      {
        id: 1006,
        title: 'Onion Pyaz',

        setUnits: [{unit: 'kg', startrange: 1, endrange: 10,incrementFactor: 5,price: '*1'},{unit: 'gms', startrange: 250, endrange: 750,incrementFactor: 50,price: '/1000'}],
      
        baseUnit: '1kg',
        basePrice: 15,

        selectedUnit: 0, 
        selectedPrice: 0,
        
        derivedUnits: [],

        slideBGColor: 'lightgray',
        addedToCart: false
      },
      {
        id: 1007,
        title: 'Caul. Flower Gobhi',

        setUnits: [{unit: 'kg', startrange: 1, endrange: 10,incrementFactor: 5,price: '*1'},{unit: 'gms', startrange: 400, endrange: 500,incrementFactor: 50,price: '/1000'}],
      
        baseUnit: '1kg',
        basePrice: 35,

        selectedUnit: 0, 
        selectedPrice: 0,
        
        derivedUnits: [],

        slideBGColor: 'lightgray',
        addedToCart: false
      }
    ]
  },
  {
    category: 'Fruits',
    items: [
      {
        id: 1009,
        title: 'AANAR',
        
        setUnits: [{unit: 'kg', startrange: 1, endrange: 10,incrementFactor: 5,price: '*1'},{unit: 'gms', startrange: 100, endrange: 200,incrementFactor: 50,price: '/1000'}],
      
        baseUnit: '1kg',
        basePrice: 120,

        selectedUnit: 0, 
        selectedPrice: 0,
        
        derivedUnits: [],

        slideBGColor: 'lightgray',
        addedToCart: false
      },
      {
        id: 1010,
        title: 'ORANGE SANTRA',
        
        setUnits: [{unit: 'kg', startrange: 1, endrange: 10,incrementFactor: 5,price: '*1'},{unit: 'gms', startrange: 100, endrange: 200,incrementFactor: 50,price: '/1000'}],
      
        baseUnit: '1kg',
        basePrice: 75,

        selectedUnit: 0, 
        selectedPrice: 0,
        
        derivedUnits: [],

        slideBGColor: 'lightgray',
        addedToCart: false
      },
      {
        id: 1008,
        title: 'AAM MANGO',
        
        setUnits: [{unit: 'kg', startrange: 1, endrange: 10,incrementFactor: 5,price: '*1'},{unit: 'gms', startrange: 100, endrange: 200,incrementFactor: 50,price: '/1000'}],
      
        baseUnit: '1kg',
        basePrice: 80,

        selectedUnit: 0, 
        selectedPrice: 0,
        
        derivedUnits: [],

        slideBGColor: 'lightgray',
        addedToCart: false        
      },
      {
        id: 1011,
        title: 'APPLE',

        setUnits: [{unit: 'kg', startrange: 1, endrange: 10,incrementFactor: 5,price: '*1'},{unit: 'gms', startrange: 100, endrange: 200,incrementFactor: 50,price: '/1000'}],
      
        baseUnit: '1kg',
        basePrice: 50,

        selectedUnit: 0, 
        selectedPrice: 0,
        
        derivedUnits: [],

        slideBGColor: 'lightgray',
        addedToCart: false
      }
    ]
  },
  {
  category: 'Cosmetics',
  items: [
      {
        id: 1012,
        title: 'Soaps',

        setUnits: [{unit: 'gms', startrange: 25, endrange: 150,incrementFactor: 50,price: '/1000'}],
      
        baseUnit: '100gms',
        basePrice: 85,

        selectedUnit: 0, 
        selectedPrice: 0,
        
        derivedUnits: [],

        slideBGColor: 'lightgray',
        addedToCart: false
      },
      {
        id: 1013,
        title: 'Dant Kanti ToothPaste',
        
        setUnits: [{unit: 'gms', startrange: 100, endrange: 250,incrementFactor: 50,price: '/1000'}],
      
        baseUnit: '250gms',
        basePrice: 120,

        selectedUnit: 0, 
        selectedPrice: 0,
        
        derivedUnits: [],

        slideBGColor: 'lightgray',
        addedToCart: false        
      },
      {
        id: 1014,
        title: 'Powder',
        
        setUnits: [{unit: 'gms', startrange: 100, endrange: 500,incrementFactor: 50,price: '/1000'}],
      
        baseUnit: '500gms',
        basePrice: 85,

        selectedUnit: 0, 
        selectedPrice: 0,
        
        derivedUnits: [],

        slideBGColor: 'lightgray',
        addedToCart: false
      },
      {
        id: 1015,
        title: 'Shampoo',

        setUnits: [{unit: 'gms', startrange: 100, endrange: 500,incrementFactor: 50,price: '/1000'}],
      
        baseUnit: '500gms',
        basePrice: 40,

        selectedUnit: 0, 
        selectedPrice: 0,
        
        derivedUnits: [],

        slideBGColor: 'lightgray',
        addedToCart: false      
      }
    ]
  }
  ];  

/*--Place Order screen - End--*/
    }

/*--Login screen - Start--*/
    checkLogin(creds) {
      return 'U001';
    }
/*--Login screen - End--*/


/*--MyOffers screen - Start--*/
    getmyOffersCount() {
      return 21;
    }
/*--MyOffers screen - End--*/

/*--MyShops screen - Start--*/
    getShops(searchCriteria){
      if(searchCriteria != '')
      {
        return this.shopDetails.filter((shop) => {
          return(
            // Filter by title
            (shop.title.toLowerCase().indexOf(searchCriteria[0].title.toLowerCase()) > -1)
              &&
            // Filter by Address
            (
              (shop.Address.toLowerCase().indexOf(searchCriteria[0].Address.toLowerCase()) > -1)
                ||
              (searchCriteria[0].Address.toLowerCase() == 'all')
            )
              &&
            // Filter by ShopType-new or added shops
            (
              ((searchCriteria[0].ShopType.toLowerCase() == 'addedshops') && (shop.Favourite < 1000))
                ||
              ((searchCriteria[0].ShopType.toLowerCase() == 'newshops') && (shop.Favourite >= 1000))
            )
          )
        });
      }
    }
    getDefaultSortOrder() {
      return this.sortOrder_Default = "Favourite"
    }
    getSortOrders() {
      return this.sortOrders;
    }
/*--MyShops screen - End--*/

/*--AddShops screen - Start--*/
    addShops(arr)
    {
      let maxFavNum = -1;
      maxFavNum = (this.getMaxFavVal(this.shopDetails,"Favourite").Favourite+1)
      //console.log(maxFavNum)
      //console.log(arr)
      if(arr != '')
      {
        this.shopDetails.filter((shop) => {
          if(arr.ShopID == shop.ShopID)
          {
            shop.Favourite=maxFavNum
          }

        })
      }
      //return this.shopDetails;
    }

    getMaxFavVal(arr, arr_element) {
      var max = arr[0];
      for (var i=0 ; i<arr.length ; i++) 
      {
        if(parseInt(arr[i][arr_element]) < 1000)
        {
          if ( parseInt(arr[i][arr_element]) > parseInt(max[arr_element]) )
          {
            max = arr[i];
          }
        }
      }
      return max;
    }
/*--AddShops screen - End--*/

/*--Place order screen - End--*/
    getMeasures() {
      return this.measures;
    }
 
    getPurchaseItems() {
      var tmpArr = Array();
      var qtyUnit = '';
      var bQty = '';
      var bPrice = 0;
      var tPrice = '';
      var tmpVal = 0;
      var tmpObj = {};
      //Set Default Data
      Object.keys(this.purchaseItems).forEach(pitem => {
        Object.keys(this.purchaseItems[pitem].items).forEach(item => {
          //if((pitem < 1) && (item < 2)) 
          {
          this.purchaseItems[pitem].items[item].selectedUnit = this.purchaseItems[pitem].items[item].baseUnit;
          this.purchaseItems[pitem].items[item].selectedPrice = this.purchaseItems[pitem].items[item].basePrice;
          Object.keys(this.purchaseItems[pitem].items[item].setUnits).forEach(unit => {
              for(
                    var ctr=this.purchaseItems[pitem].items[item].setUnits[unit].endrange;
                    ctr>=(this.purchaseItems[pitem].items[item].setUnits[unit].startrange-1);
                    (ctr = ctr-this.purchaseItems[pitem].items[item].setUnits[unit].incrementFactor)
              )
              {
                /*
                  qtySet[0].price: '*1'
                  qtySet[0].price: '/1000'
                  basePrice: 100
                */
                qtyUnit = ctr + this.purchaseItems[pitem].items[item].setUnits[unit].unit;
                bQty = this.purchaseItems[pitem].items[item].baseUnit;
                bPrice = this.purchaseItems[pitem].items[item].basePrice;
                tPrice = this.purchaseItems[pitem].items[item].setUnits[unit].price;
                tmpVal = 0;
                tmpObj = {};
                if(ctr == 0 || qtyUnit == bQty)
                {
                 qtyUnit = bQty;
                 tmpVal = bPrice;
                 //tmpObj = { unit: bQty, price: bPrice };
                }
                else 
                {
                  if(tPrice != '')
                  { 
                    tmpVal = eval(ctr + tPrice)
                    tmpVal = tmpVal * bPrice
                    tmpVal = +tmpVal.toFixed(2);
                    //console.log(qtyUnit,bPrice,(ctr + tPrice + '*' + bPrice)) 
                  }
                }
                tmpObj = { unit: qtyUnit, price: tmpVal };
                this.purchaseItems[pitem].items[item].derivedUnits.push(tmpObj);
              }
          });
        }
        });  
      });
      return this.purchaseItems;
    }

}