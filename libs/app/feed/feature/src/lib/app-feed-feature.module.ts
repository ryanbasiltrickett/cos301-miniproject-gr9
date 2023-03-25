import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { appFeedFeatureRoutes } from './lib.routes';
import { FeedComponent } from './feed.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NgxSkeletonLoaderModule,
    RouterModule.forChild(appFeedFeatureRoutes),
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
})
export class AppFeedFeatureModule {}
