import { Component, Input } from '@angular/core';
import { Data } from '../../providers/data/data';

/**
 * Generated class for the AddToCartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'addtoCart',
  templateUrl: 'addtoCart.html'
})
export class AddToCartComponent {
  @Input() headerColor: string = '#F53D3D';
  showQty: boolean = false;
  tmpTemplate: any = '';
  constructor(public dataService: Data) {
    //this.showQty = false;
    this.tmpTemplate = this.dataService.manualOrderTemplate;
  }

  setState() {
  	console.log('in')
    this.showQty = !this.showQty;
    console.log(this.showQty)
  }
  setQty(obj,num) {
    obj.qty = obj.qty + num;
    if(obj.qty < 0) obj.qty=0;
    console.log(obj.qty);
  }
}
