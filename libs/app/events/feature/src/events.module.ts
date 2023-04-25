import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterModule } from '@angular/router';
import { appEventsFeatureRoutes} from './events.routing';

import { EventsComponent } from './events.page.component';
import { HeaderModule } from '@mp/app/feed/ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appEventsFeatureRoutes),
    NgxSkeletonLoaderModule,
    IonicModule,
    FormsModule,
    HeaderModule,
  ],
  declarations: [EventsComponent],
  exports: [EventsComponent],
})
export class EventsModule {}