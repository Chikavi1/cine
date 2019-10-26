import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ShowPage,ProfilePage,LoginPage } from '../index.paginas';


import { ModalController } from 'ionic-angular';
//import { ModalPage } from './modal-page';
//cambiar
import { MoviesProvider } from '../../providers/movies/movies';
import { AlertController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	peliculas :any[];
  error: any[];
  status: any[];

  audio = new Audio();


  constructor(public navCtrl: NavController,
  			public modalCtrl: ModalController,
  			public Movie: MoviesProvider,
        public alertCtrl: AlertController,
        public localNotifications: LocalNotifications) {
  	 //this.peliculas = PELICULAS.slice(0);
  	 this.Movie.index().subscribe(
  	 	(data) => {this.peliculas = data},
      (error) => {this.showAlert(error)}
  	 	//console.log(data)
  	 	
  	 	);
  }
  navOptions = {
	animation: 'md-transition',
	duration: 1500
};
	goShow(pelicula){
		this.navCtrl.push(ShowPage,{peli :pelicula},this.navOptions);
	}
	goProfile(){
		const modal = this.modalCtrl.create(LoginPage);
		modal.present();
	}

   showAlert(error) {
    const alert = this.alertCtrl.create({
      title: "tenemos un error",
      subTitle: error.message,
      buttons: ['Entendido']
    });
    alert.present();
  }
music(){

   this.audio.src = "assets/resources/sounds/definite.mp3";

    this.audio.load();
    this.audio.play();

}

  notificaciones(){
    let uri = "http://www.cutonala.udg.mx/sites/default/files/cowspiracy_0.jpg";

    this.localNotifications.schedule({
   title: "Aviso de pelicula",
   text: 'la pelicula empieza en una hora',
   trigger: {at: new Date(new Date().getTime() + 3600)},
   led: 'FF0000',
   attachments: [uri],
   sound: "file://assets/resources/sounds/definite.mp3",
   vibrate: true,
   autoClear: true,
   foreground: true
});

  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.Movie.index().subscribe(
      (data) => {this.peliculas = data},
      (error) => {this.showAlert(error)}
      //console.log(data)
      
      );
            refresher.complete();
    }, 2000);
  }
	
}
