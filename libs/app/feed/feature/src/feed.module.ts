import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FeedModule as FeedDataAccessModule } from '@mp/app/feed/data-access';
import { FeedModule as FeedUiModule, HeaderModule } from '@mp/app/feed/ui';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FeedPage } from './feed.page.component';
import { FeedRouting } from './feed.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedRouting,
    FeedUiModule,
    FeedDataAccessModule,
    HeaderModule,
    NgxSkeletonLoaderModule,
  ],
  declarations: [FeedPage],
})
export class FeedModule {}
