import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { TicketPage } from '../index.paginas';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-asientos',
  templateUrl: 'asientos.html',
})
export class AsientosPage {
  peliInfo = [];
  varia = true;


  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.peliInfo = this.navParams.get("peli");

    
  }
  asientos = [['A1', 'A2', 'A3','A4','A5','A6','A7','A8','A9','A10','a10','A11','A12', 'A13','A14','A15','A16','A17','A18','A19','A20',],
            ['B1', 'B2', 'B3','B4','B5','B6','B7','B8','B9','B10','a30','B11', 'B12', 'B13','B14','B15','B16','B17','B18','B19','B20'],
            ['C1', 'C2', 'C3','C4','C5','C6','C7','C8','C9','C10','a50','C11', 'C12', 'C13','C14','C15','C16','C17','C18','C19','C20'],
            ['D1','D2','D3','D4','D5','D6','D7','D8','D9','C10','a70','D11','D12','D13','D14','D15','D16','D17','D18','D19','D20'],
            ['E1','E2','E3','E4','E5','E6','E7','E8','E9','E10','a90','E11','E12','E13','E14','E15','E16','E17','E18','E19','E20'],
            ['F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','a110','F1','F12','F13','F14','F15','F16','F17','F18','F19','F20']];


  ionViewDidLoad() {
    let myContainer1 = <HTMLElement> document.querySelector(" #col-a10");
    let myContainer2 = <HTMLElement> document.querySelector(" #col-a30");
    let myContainer3 = <HTMLElement> document.querySelector(" #col-a50");
    let myContainer4 = <HTMLElement> document.querySelector(" #col-a70");
    let myContainer5 = <HTMLElement> document.querySelector(" #col-a90");
    let myContainer6 = <HTMLElement> document.querySelector(" #col-a110");

  myContainer1.innerHTML = '<div style="color:transparent;">__</div>';
  myContainer2.innerHTML = '<div style="color:transparent;">__</div>';
  myContainer3.innerHTML = '<div style="color:transparent;">__</div>';
  myContainer4.innerHTML = '<div style="color:transparent;">__</div>';
  myContainer5.innerHTML = '<div style="color:transparent;">__</div>'; 
  myContainer6.innerHTML = '<div style="color:transparent;">__</div>'; 
  }

  isSelected:boolean = false;
  navOptions = {
  animation: 'md-transition',
  duration: 2500
};


   contador = 0;

caca2(cl:any){
  if(cl.startsWith("a")){
    return;
  }
    var b = document.getElementById("img"+cl);
    if(this.contador < 5){
      this.isSelected = true;
      if(b.setAttribute == null){
        console.log("erro mi perro");
      }
        b.setAttribute("src","./assets/imgs/seleccion.png");
      this.totalBoletos(cl,this.contador);
    }
    this.contador++;

}
arreglo:any = [];

  totalBoletos(numero:number,conta:number){
    if(conta == 4){
       this.arreglo += numero + "." ;
    }else{
    this.arreglo += numero + "," ;  
    }
    console.log(conta);
  }

  getTotalBoletos(){
    return this.arreglo;
  }

identify(){
  const prompt = this.alertCtrl.create({
      title: 'Confirma codigo',
      message: "Al Confirmar el codigo aceptas la responsabilidad de adquirir los boletos",
      inputs: [
        {
          name: 'codigo',
          placeholder: 'Codigo del Alumno'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Acepto',
          handler: data => {
            if(data.codigo == 214426868 ){
              this.goTickets();
            }  else{
              this.alertError();
            }
          }
        }
      ]
    });
    prompt.present();
}

alertError(){
   const prompt = this.alertCtrl.create({
      title: 'Codigo no valido',
      message: "Introduce tu codigo de la UDG",
      buttons: [
      {
        text : 'salir',
      }
      ]
    });
   prompt.present();
}

goTickets(){

	this.navCtrl.push(TicketPage,{ 'ticket' : this.arreglo, 'peli' : this.peliInfo },this.navOptions);
}

}
