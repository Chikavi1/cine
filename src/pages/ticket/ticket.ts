import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
})
export class TicketPage {


  token:any;
  qrData = this.generateToken();
  createdCode = null;
  asientos:any = {};
  pelicula:any = {};
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.createCode();
    console.log(this.qrData);
    console.log("caca");
    this.asientos = this.navParams.get("ticket");
    this.pelicula = this.navParams.get("peli");
  }


 generateToken(){
  let random = Math.random().toString(36).substr(2)
  return this.token = random + random ; 

 }

  createCode(){
  	this.createdCode = this.qrData;
  }
}
