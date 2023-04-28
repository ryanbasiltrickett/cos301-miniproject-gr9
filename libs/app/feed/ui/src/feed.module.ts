import { NgModule } from '@angular/core';
import { PostModule } from './post';
import { HeaderModule } from './header';

@NgModule({
  imports: [PostModule, HeaderModule],
  exports: [PostModule, HeaderModule],
})
export class FeedModule {}
