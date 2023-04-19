import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { appFeedFeatureRoutes } from './lib.routes';
import { FeedComponent } from './feed.component';
import { FeedModule as FeedApiModule} from '@mp/app/feed/data-access';
import { FeedModule as FeedUiModule } from '@mp/app/feed/ui';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NgxSkeletonLoaderModule,
    RouterModule.forChild(appFeedFeatureRoutes),
    FeedUiModule,
    //FeedApiModule,
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
})
export class AppFeedFeatureModule {}
