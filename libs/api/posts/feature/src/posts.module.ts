import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PostsModule as PostsDataAccessModule } from '@mp/api/posts/data-access';
import { PostService } from './posts.service';
import { AddPostHandler, LikePostHandler } from './commands';
import { PostLikedHandler } from './events';

export const CommandHandlers = [AddPostHandler, LikePostHandler];
export const EventHandlers = [PostLikedHandler];

@Module({
  imports: [CqrsModule, PostsDataAccessModule],
  providers: [PostService, ...CommandHandlers, ...EventHandlers],
  exports: [PostService],
})
export class PostsModule {}
