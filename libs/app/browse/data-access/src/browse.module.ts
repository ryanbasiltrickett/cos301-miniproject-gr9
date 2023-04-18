import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule } from '@mp/app/auth/data-access';
import { NgxsModule } from '@ngxs/store';
import { DashboardState } from './browse.state';

import { BrowseApi } from './browse.api';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([DashboardState]), AuthModule],
  providers: [BrowseApi],
})
export class BrowseModule {}
