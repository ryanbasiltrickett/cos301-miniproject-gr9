import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PostsModule as PostsDataAccessModule } from '@mp/api/posts/data-access';
import { PostService } from './posts.service';
import { CreatePostHandler, LikePostHandler } from './commands';
import { PostCreatedHandler, PostLikedHandler } from './events';

export const CommandHandlers = [CreatePostHandler, LikePostHandler];
export const EventHandlers = [PostCreatedHandler, PostLikedHandler];

@Module({
  imports: [CqrsModule, PostsDataAccessModule],
  providers: [PostService, ...CommandHandlers, ...EventHandlers],
  exports: [PostService],
})
export class PostsModule {}
