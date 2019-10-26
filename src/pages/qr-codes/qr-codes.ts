import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ShowQrcodePage } from '../index.paginas';

@Component({
  selector: 'page-qr-codes',
  templateUrl: 'qr-codes.html',
})
export class QrCodesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


showQrcode(){
	this.navCtrl.push(ShowQrcodePage);
}
}