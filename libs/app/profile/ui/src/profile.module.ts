import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AccountDetailsModule } from './account-details';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AccountDetailsModule,
  ],
  exports: [
    AccountDetailsModule,
  ],
})
export class ProfileModule {}
