import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CopyrightModule } from '@mp/app/copyright/ui';
import { VersionModule } from '@mp/app/version/ui';
import { WelcomeModule as WelcomeDataAccessModule } from '@mp/app/welcome/data-access';
import { WelcomeModule as TimeShareUIModule } from '@mp/app/welcome/ui';
import { WelcomePage } from './welcome.page';
import { WelcomeRouting } from './welcome.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimeShareUIModule,
    WelcomeRouting,
    WelcomeDataAccessModule,
    CopyrightModule,
    VersionModule,
  ],
  declarations: [WelcomePage],
})
export class WelcomeModule {}
