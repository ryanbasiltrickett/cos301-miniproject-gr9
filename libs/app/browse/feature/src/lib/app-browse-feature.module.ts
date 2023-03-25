import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appBrowseFeatureRoutes } from './lib.routes';
import { BrowseComponent } from './browse.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(appBrowseFeatureRoutes)],
  declarations: [BrowseComponent],
  exports: [BrowseComponent],
})
export class AppBrowseFeatureModule {}
