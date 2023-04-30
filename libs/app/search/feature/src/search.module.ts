import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterModule } from '@angular/router';
import { appBrowseFeatureRoutes } from './search.routing';

import { BrowseModule as BrowseUiModule } from '@mp/app/search/ui';
import { BrowseComponent } from './search.component';
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
export class SearchModule {}
