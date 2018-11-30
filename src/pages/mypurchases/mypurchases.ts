import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import chartJs from 'chart.js';


/**
 * Generated class for the MypurchasesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mypurchases',
  templateUrl: 'mypurchases.html',
})
export class MypurchasesPage {
	@ViewChild('barCanvas') barCanvas;
    barChart: any;
	shopname = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.shopname = navParams.data.card.title;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.barChart = this.getBarChart();
    }, 150);
   }

  getChart(context, chartType, data, options?) {
    return new chartJs(context, {
      data,
      options,
      type: chartType,
    });
  }

  getBarChart() {
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Purchase Amount',
        data: [12000, 19000, 3000, 500, 200, 300],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    };

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };

    return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);
  }


  ionViewDidLoad() {
    //console.log('ionViewDidLoad MypurchasesPage');
  }

}
