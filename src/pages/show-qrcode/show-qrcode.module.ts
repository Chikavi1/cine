import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowQrcodePage } from './show-qrcode';

@NgModule({
  declarations: [
    ShowQrcodePage,
  ],
  imports: [
    IonicPageModule.forChild(ShowQrcodePage),
  ],
})
export class ShowQrcodePageModule {}
