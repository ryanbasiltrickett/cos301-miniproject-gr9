import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CopyrightModule } from '@mp/app/copyright/ui';
import { ForgetPage } from './forget.page';
import { ForgetRouting } from './forget.routing';
//import { ForgetModule as ForgetDataAccessModule } from '@mp/app/forget/data-access';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ForgetRouting,
    //ForgetDataAccessModule,
    CopyrightModule,
  ],
  declarations: [ForgetPage],
})
export class ForgetModule {}
