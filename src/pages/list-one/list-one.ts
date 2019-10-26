import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';

/**
 * Generated class for the ListOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-one',
  templateUrl: 'list-one.html',
})
export class ListOnePage {
  constructor(public navCtrl: NavController, public navParams: NavParams,public myNav: Nav) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListOnePage');
  }
 ionViewWillLeave() {
this.myNav.swipeBackEnabled = false;
}

/* Not sure if this is necessary */
ionViewWillUnload() {
this.myNav.swipeBackEnabled = true;
}

}
