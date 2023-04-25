import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from './header';
import { NotificationListModule } from '.';


@NgModule({
    imports: [
      CommonModule,
      IonicModule,
      NotificationListModule,
      HeaderModule,
    ],
    exports: [
        NotificationListModule,
        HeaderModule,
    ],
  })
  export class NotificationModule {}