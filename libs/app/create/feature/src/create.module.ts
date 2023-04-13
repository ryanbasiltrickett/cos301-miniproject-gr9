import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterModule } from '@angular/router';
import { appCreateFeatureRoutes} from './create.routing';

import { CreateModule as CreateUiModule } from '@mp/app/create/ui';
import { CreateComponent } from './create.page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appCreateFeatureRoutes),
    NgxSkeletonLoaderModule,
    IonicModule,
    FormsModule,
    CreateUiModule,
  ],
  declarations: [CreateComponent],
  exports: [CreateComponent],
})
export class CreateModule {}