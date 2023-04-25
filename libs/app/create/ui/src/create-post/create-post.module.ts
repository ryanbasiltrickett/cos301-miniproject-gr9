import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfileModule } from '@mp/app/profile/data-access';
import { FormsModule } from '@angular/forms';
import { CreateModule } from '@mp/app/create/data-access';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CreatePostComponent } from './create-post.component';
import { HeaderModule } from '@mp/app/feed/ui';

@NgModule({
    declarations: [CreatePostComponent],
    imports: [
      CommonModule,
      IonicModule,
      FormsModule,
      NgxSkeletonLoaderModule,
      NgxsFormPluginModule,
      ReactiveFormsModule,
      HeaderModule,
      ProfileModule,
      CreateModule,
    ],
    exports: [CreatePostComponent],
  })
  export class CreatePostModule {}