import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostModule as PostModuleAcess} from '@mp/app/post/data-access';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CommentComponent } from './comment.component';
import { FeedModule as FeedDataAccessModule } from '@mp/app/feed/data-access';

@NgModule({
    declarations: [CommentComponent],
    imports: [
      CommonModule,
      IonicModule,
      NgxSkeletonLoaderModule,
      NgxsFormPluginModule,
      ReactiveFormsModule,
      PostModuleAcess,
      FeedDataAccessModule
    ],
    exports: [CommentComponent],
  })
  export class CommentModule {}
