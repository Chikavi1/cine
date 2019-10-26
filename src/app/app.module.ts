  import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AsientosPage,ShowPage,ProfilePage,TicketPage,IntroduccionPage,LoginPage,ListPage,RegisterPage,QrCodesPage,InformationPage,ListOnePage,ShowQrcodePage,DulceriaPage} from '../pages/index.paginas';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import {HttpClientModule} from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { AjustesService } from '../providers/ajustes';

import { OneSignal } from '@ionic-native/onesignal';
import { PushnotificationProvider } from '../providers/pushnotification/pushnotification';
import { MoviesProvider } from '../providers/movies/movies';
import { CodeProvider } from '../providers/code/code';
import { LocalNotifications } from '@ionic-native/local-notifications';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AsientosPage,
    ShowPage,
    ProfilePage,
    TicketPage,
    IntroduccionPage,
    LoginPage,
    ListPage,
    RegisterPage,
    QrCodesPage,
    InformationPage,
    ShowQrcodePage,
    DulceriaPage,
    ListOnePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
        backButtonText: 'Atras'
    }),
    NgxQRCodeModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AsientosPage,
    ShowPage,
    ProfilePage,
    TicketPage,
    IntroduccionPage,
    LoginPage,
    ListPage,
    RegisterPage,
    QrCodesPage,
    InformationPage,
    ShowQrcodePage,
    DulceriaPage,
    ListOnePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AjustesService,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PushnotificationProvider,
    MoviesProvider,
    CodeProvider,
    LocalNotifications
  ]
})
export class AppModule {}
