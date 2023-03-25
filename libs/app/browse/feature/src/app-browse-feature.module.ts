import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterModule } from '@angular/router';
import { appBrowseFeatureRoutes } from './lib.routes';
import { BrowseComponent } from './browse.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appBrowseFeatureRoutes),
    NgxSkeletonLoaderModule,
    IonicModule,
  ],
  declarations: [BrowseComponent],
  exports: [BrowseComponent],
})
export class AppBrowseFeatureModule {}

