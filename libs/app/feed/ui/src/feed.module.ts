import { NgModule } from '@angular/core';
import { PostModule } from './post';

@NgModule({
  imports: [PostModule],
  exports: [PostModule],
})
export class FeedModule {}
