import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterModule } from '@angular/router';
import { appEventsFeatureRoutes } from './events.routing';

import { EventsModule as EventsUiModule } from '@mp/app/events/ui';
import { EventsComponent } from './events.component';
import { HeaderModule } from '@mp/app/feed/ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appEventsFeatureRoutes),
    NgxSkeletonLoaderModule,
    IonicModule,
    EventsUiModule,
    HeaderModule,
  ],
  declarations: [EventsComponent],
  exports: [EventsComponent],
})
export class AppEventsFeatureModule {}
