import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {
	public myUserID: string;
	public myOffersCount: number;
	constructor() {

	}

/*--Place order page - Start--*/
  
  orderID: number = 0;
  manualItemId = 9000;
  totCartItems: number = 0;
  cartTotal = 0;
  orderArr: Array<any>;
  measures: Array<any>;
  purchaseItems: Array<any>;  
/*--Place order page - End--*/

/*--Common Functions - Start--*/
	searchByKey(array, key, value) {
	    for (var i = 0; i < array.length; i++) 
	    {
	        if (array[i][key].toString().toLowerCase() === value.toString().toLowerCase()) 
	        {
	            return array[i];
	        }
	    }
	    return null;
	}

	searchAndDelete(array, key, value) {
	    for (var i = 0; i < array.length; i++) 
	    {
	        if (array[i][key].toString().toLowerCase() === value.toString().toLowerCase()) 
	        {
	            array.splice(i, 1);	
	            break;
	        }
	    }
	   	return array;
	}
	sortByKey(array, key) {
		return array.sort(function(a, b) 
		{
	    	var x = a[key]; var y = b[key];
	    	return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		});
	}
/*--Common Functions - End--*/

/*--Cart related functions - Start--*/
setCartTotal() {
    this.cartTotal = 0;
    for(let item of this.orderArr) {
      if(item.selectedPrice === 0)
      {
      	this.cartTotal = 0;
      	break;
      }
      this.cartTotal += item.selectedPrice;
    }
  }
/*--Cart related functions - End--*/  
}
