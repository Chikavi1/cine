import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { Platform } from 'ionic-angular';


@Injectable()
export class AjustesService {

	intro = {
		mostrar_intro: true
	}

  constructor(private platform : Platform,
              private storage: Storage) {
    console.log('Hello AjustesProvider Provider');

  }
  cargar_storage(){

    let promesa =  new Promise( (resolve,reject) =>{

      if(this.platform.is("cordova")){

          this.storage.ready()
            .then(()=>{

              this.storage.get("intro")
                  .then( intro =>{

                    if(intro){
                      this.intro = intro;
                    }
                    resolve();
                  });
            })
        }else{

          if(localStorage.getItem("intro")){
            this.intro = JSON.parse(localStorage.getItem("intro"));
          }

          resolve();
        }

      });

return promesa;

}
  guardar_storage(){
  	if(this.platform.is("cordova")){

      this.storage.ready()
          .then(()=>{
            this.storage.set("intro", this.intro );
          })

  	}else{
  		localStorage.setItem("intro", JSON.stringify(this.intro) );
  	}
  }
}
