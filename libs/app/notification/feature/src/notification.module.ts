import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterModule } from '@angular/router';
import { appNotificationFeatureRoutes} from './notification.routing';

import { NotificationComponent } from './notification.page.component';
import { HeaderModule } from '@mp/app/feed/ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appNotificationFeatureRoutes),
    NgxSkeletonLoaderModule,
    IonicModule,
    FormsModule,
    HeaderModule,
  ],
  declarations: [NotificationComponent],
  exports: [NotificationComponent],
})
export class NotificationModule {}