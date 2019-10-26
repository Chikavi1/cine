import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListOnePage } from '../index.paginas';
/**
 * Generated class for the DulceriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dulceria',
  templateUrl: 'dulceria.html',
})
export class DulceriaPage {
pushPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.pushPage = ListOnePage;
   
  }

navOptions = {
	animation: 'md-transition',
	duration: 1500
};



  	goDulces(){
  			this.navCtrl.push(ListOnePage,null,this.navOptions);
  	}
}
