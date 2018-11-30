import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AccordionListComponent } from './accordion-list/accordion-list';
import { AddToCartComponent } from './addtoCart/addtoCart';

export const components = [
  AddToCartComponent,
  AccordionListComponent
];

@NgModule({
  declarations: [components],
  imports: [IonicModule],
})
export class ComponentsModule {}
