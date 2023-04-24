import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfileModule } from '@mp/app/profile/data-access';
import { FormsModule } from '@angular/forms';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CreatePostComponent } from './create-post.component';

@NgModule({
    declarations: [CreatePostComponent],
    imports: [
      CommonModule,
      IonicModule,
      FormsModule,
      NgxSkeletonLoaderModule,
      NgxsFormPluginModule,
      ReactiveFormsModule,
      ProfileModule,
    ],
    exports: [CreatePostComponent],
  })
  export class CreatePostModule {}