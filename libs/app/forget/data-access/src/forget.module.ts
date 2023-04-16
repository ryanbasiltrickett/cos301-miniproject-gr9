import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CopyrightModule } from '@mp/app/copyright/ui';
import { VersionModule } from '@mp/app/version/ui';
import { ForgetModule as ForgetDataAccessModule } from '@mp/app/forget/data-access';
import { ForgetPage } from './forget.page';
import { ForgetRouting } from './forget.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgetRouting,
    ForgetDataAccessModule,
    CopyrightModule,
    VersionModule,
  ],
  declarations: [ForgetPage],
})
export class ForgetModule {}
