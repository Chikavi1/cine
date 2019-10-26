import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListOnePage } from './list-one';

@NgModule({
  declarations: [
    ListOnePage,
  ],
  imports: [
    IonicPageModule.forChild(ListOnePage),
  ],
})
export class ListOnePageModule {}
