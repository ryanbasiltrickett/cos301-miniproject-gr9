import { NgModule } from '@angular/core';
import { CommentModule } from './comment';

@NgModule({
  imports: [CommentModule],
  exports: [CommentModule],
})
export class PostModule {}
