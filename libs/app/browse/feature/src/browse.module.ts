import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { BrowseRouting } from './browse.routing';
import { BrowseModule as BrowseDataAccessModule } from '@mp/app/browse/data-access';
import { BrowseModule as BrowseUiModule } from '@mp/app/browse/ui';
import { BrowsePage } from './browse.page';
import { HeaderModule } from '@mp/app/feed/ui';

@NgModule({
  imports: [
    CommonModule,
    BrowseRouting,
    NgxSkeletonLoaderModule,
    IonicModule,
    BrowseUiModule,
    BrowseDataAccessModule,
    HeaderModule,
  ],
  declarations: [BrowsePage],
  exports: [BrowsePage],
})
export class BrowseModule {}
