import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AsientosPage } from '../index.paginas';
/**
 * Generated class for the ShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show',
  templateUrl: 'show.html',
})
export class ShowPage {
pagina2:any = AsientosPage;
	
	pelicula:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.pelicula = this.navParams.get("peli");
  }


irAsientosPage(){

	this.navCtrl.push(AsientosPage,{peli : this.pelicula});
}
}
