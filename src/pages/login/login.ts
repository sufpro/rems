import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { MyshopsPage } from '../myshops/myshops';
import { Data } from '../../providers/data/data';
import { GlobalProvider } from "../../providers/global/global";
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  backgroundImage = 'assets/imgs/loginpage.jpg';
  useremail: string;
  password: string;
 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public dataService: Data, 
    public global: GlobalProvider,
    private toastCtrl: ToastController
  )  {  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

   login() {
   /*
      this.dataService.checkLogin([{useremail: this.useremail, password: this.password}]).subscribe(
         data => {      
           //Navigate to home page              
            this.nav.setRoot(DashboardPage);
         }
      )
   */
    this.global.myUserID = '';
    this.global.myUserID = this.dataService.checkLogin([{useremail: this.useremail, password: this.password}])
    if(this.global.myUserID.length > 0)
    {
      this.navCtrl.push(MyshopsPage);
    }
    else
    {
     let toast = this.toastCtrl.create({
        message: 'Invalid Credentials, kindly provide valid username and password' ,
        duration: 3000,
        position: 'bottom'
      });

      toast.onDidDismiss(() => {
        //console.log('Dismissed toast');
      });
      toast.present();
    }
  }

  goToSignup() {
    // this.navCtrl.push(SignupPage);
  }

  goToResetPassword() {
    // this.navCtrl.push(ResetPasswordPage);
  }
}


