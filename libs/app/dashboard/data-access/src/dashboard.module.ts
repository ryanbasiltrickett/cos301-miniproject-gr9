import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { GenerateState } from './dashboard.state';
import { DashboardAPI } from './dashboard.api';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([GenerateState])],
  providers: [DashboardAPI],
})
export class GenerateModule {}