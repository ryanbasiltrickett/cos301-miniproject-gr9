import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfileModule as ProfileDataAccessModule } from '@mp/app/profile/data-access';
import { ProfileModule as ProfileUiModule } from '@mp/app/profile/ui';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SettingsPage } from './settings.page';
import { SettingsRouting } from './settings.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsRouting,
    ProfileUiModule,
    ProfileDataAccessModule,
    NgxSkeletonLoaderModule,
  ],
  declarations: [SettingsPage],
})
export class SettingsModule {}
