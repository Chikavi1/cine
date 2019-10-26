import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { HomePage } from '../index.paginas';

import { AjustesService } from "../../providers/ajustes";
@Component({
  selector: 'page-introduccion',
  templateUrl: 'introduccion.html',
})
export class IntroduccionPage {

slides:any[] = [
  {
    title: "Bienvenido!!!",
    description: "Esta aplicación nos facilitara el uso de la cineteca en el cut!",
    image: "assets/imgs/cut.jpg",
  },
  {
    title: "¿Qué es Cinecut?",
    description: "<h2>Cinecut</h2> es un proyecto en el que los alumnos del CUT podran disfrutar de las peliculas sin ningun costo.",
    image: "assets/imgs/cineteca.jpg",
  },
  {
    title: "¿Que hace esta app?",
    description: "Con esta aplicación podras  conocer la cartelera y comprar los boletos comodamente desde tu celular!",
    image: "assets/imgs/movie.svg",
  }
];

  constructor(public navCtrl: NavController,
  			  private _ajustes: AjustesService) {
  }


saltar_tutorial(){
	this._ajustes.intro.mostrar_intro = false;
	this._ajustes.guardar_storage();
	this.navCtrl.setRoot( HomePage );
}

}
