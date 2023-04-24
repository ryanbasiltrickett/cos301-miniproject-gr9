import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterModule } from '@angular/router';
import { appBrowseFeatureRoutes } from './lib.routes';

import { BrowseModule as BrowseUiModule } from '@mp/app/browse/ui';
import { BrowseComponent } from './browse.component';
import { HeaderModule } from '@mp/app/feed/ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appBrowseFeatureRoutes),
    NgxSkeletonLoaderModule,
    IonicModule,
    BrowseUiModule,
    HeaderModule,
  ],
  declarations: [BrowseComponent],
  exports: [BrowseComponent],
})
export class AppBrowseFeatureModule {}
