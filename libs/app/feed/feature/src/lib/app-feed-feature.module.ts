import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appFeedFeatureRoutes } from './lib.routes';
import { FeedComponent } from './feed.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(appFeedFeatureRoutes)],
  declarations: [FeedComponent],
  exports: [FeedComponent],
})
export class AppFeedFeatureModule {}
