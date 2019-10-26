import { Component, ViewChild  } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroduccionPage,HomePage,ListPage,RegisterPage,QrCodesPage,InformationPage,ProfilePage,DulceriaPage } from '../pages/index.paginas';
import { AjustesService } from '../providers/ajustes';
import { timer } from 'rxjs/observable/timer';
import { PushnotificationProvider } from '../providers/pushnotification/pushnotification';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
   @ViewChild(Nav) nav: Nav;
  rootPage:any;
  showSplash = true;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private _ajustes:AjustesService,
              public _pushProvider: PushnotificationProvider
              ) {
this.pages = [
      //{ title: 'Registrate',component: RegisterPage },
      { title: 'Cartelera',component: HomePage},
      { title: 'Dulceria',component: DulceriaPage },
      { title: 'Mis Boletos', component: QrCodesPage},
      { title: 'Informacion',component: InformationPage }
    ];

    platform.ready().then(() => {      
              statusBar.backgroundColorByHexString('#17202f');
              splashScreen.hide();
              
      this._ajustes.cargar_storage()
          .then( ()=>{
              if( this._ajustes.intro.mostrar_intro){
                this.rootPage = IntroduccionPage;
              }else{
                this.rootPage = HomePage;
              }
              this._pushProvider.init_notifications();  
              timer(4000).subscribe(() => this.showSplash = false);
      });  
    });
  }
  openPage(page) {

    this.nav.setRoot(page.component);
  }
  goProfile(){
    this.nav.setRoot(ProfilePage);
  }
}

