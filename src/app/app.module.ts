import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { AddShopsPage } from '../pages/addshops/addshops';
import { MypurchasesPage } from '../pages/mypurchases/mypurchases';
import { MyshopsPage } from '../pages/myshops/myshops';
import { MyoffersPage } from '../pages/myoffers/myoffers';
import { PlaceOrderPage } from '../pages/placeorder/placeorder';
import { ShoppingCartPage } from '../pages/shoppingcart/shoppingcart';
import { AddItemPopupPage } from '../pages/additempopup/additempopup';
import { AccordionListComponent } from '../components/accordion-list/accordion-list';
import { AddToCartComponent } from '../components/addtoCart/addtoCart';
import { Data } from '../providers/data/data';
import { HttpModule } from '@angular/http';
import { GlobalProvider } from '../providers/global/global';
import {RoundProgressModule} from 'angular-svg-round-progressbar';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    DashboardPage,
    AddShopsPage,
    MypurchasesPage,
    MyshopsPage,
    MyoffersPage,
    PlaceOrderPage,
    ShoppingCartPage,
    AddItemPopupPage,
    AccordionListComponent,
    AddToCartComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    RoundProgressModule
  ],
  exports: [
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    DashboardPage,
    AddShopsPage,
    MypurchasesPage,
    MyshopsPage,
    MyoffersPage,
    PlaceOrderPage,
    ShoppingCartPage,
    AddItemPopupPage,
    AccordionListComponent,
    AddToCartComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Data,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider
  ]
})
export class AppModule {}
