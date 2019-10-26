import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AsientosPage } from './asientos';

@NgModule({
  declarations: [
    AsientosPage,
  ],
  imports: [
    IonicPageModule.forChild(AsientosPage),
  ],
})
export class AsientosPageModule {}
