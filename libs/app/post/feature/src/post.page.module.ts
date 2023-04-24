import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterModule } from '@angular/router';
import { postFeatureRoutes } from './post.routes';
import { PostModule as PostDataAccessModule } from '@mp/app/post/data-access';
// import { _ as PageUiModule } from '@mp/app/browse/ui';
import { PostPageComponent } from './post.page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(postFeatureRoutes),
    NgxSkeletonLoaderModule,
    IonicModule,
    PostDataAccessModule,
  ],
  declarations: [PostPageComponent],
  exports: [PostPageComponent],
})
export class PostPageFeatureModule {}
