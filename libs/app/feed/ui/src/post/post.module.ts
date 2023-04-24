import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfileModule as ProfileModuleAcess} from '@mp/app/profile/data-access';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PostComponent } from './post.component';
import { FeedModule as FeedDataAccessModule } from '@mp/app/feed/data-access';

@NgModule({
    declarations: [PostComponent],
    imports: [
      CommonModule,
      IonicModule,
      NgxSkeletonLoaderModule,
      NgxsFormPluginModule,
      ReactiveFormsModule,
      ProfileModuleAcess,
      FeedDataAccessModule,

    ],
    exports: [PostComponent],
  })
  export class PostModule {}
