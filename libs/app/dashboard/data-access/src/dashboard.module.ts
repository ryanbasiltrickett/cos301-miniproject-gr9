import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { DashboardEventState } from './dashboard.state';
import { DashboardAPI } from './dashboard.api';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([DashboardEventState])],
  providers: [DashboardAPI],
})
export class GenerateModule {}