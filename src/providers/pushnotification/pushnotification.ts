import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { Platform } from 'ionic-angular';
@Injectable()
export class PushnotificationProvider {

  constructor(private oneSignal: OneSignal,
  			public platform: Platform) {
  	
    console.log('Hello PushnotificationProvider Provider');
  }
  init_notifications(){
  	if(this.platform.is("cordova")){

  	this.oneSignal.startInit('ac1d532e-4003-4c9a-98c1-7a198fc51b7b', '169721607005');

	this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

	this.oneSignal.handleNotificationReceived().subscribe(() => {
	 // do something when notification is received
	});

	this.oneSignal.handleNotificationOpened().subscribe(() => {
	  // do something when a notification is opened
	});

	this.oneSignal.endInit();
}else{
	console.log("Estas en chrome")
  }
}
}
