import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostModule as PostDataAccessModule } from '@mp/app/post/data-access';
// import { PostModule as PostUiModule } from '@mp/app/profile/ui';
// import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PostPageComponent } from './post.page';
// import { PostRouting } from './profile.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // PostRouting,
    // PostUiModule,
    PostDataAccessModule,
    // NgxSkeletonLoaderModule,
  ],
  declarations: [PostPageComponent],
})
export class PostModule {}
