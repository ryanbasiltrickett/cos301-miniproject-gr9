import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PostsModule as PostsDataAccessModule } from '@mp/api/posts/data-access';
import { PostService } from './posts.service';
import {
  CreatePostHandler,
  LikePostHandler,
  UpdatePostTimeHandler,
} from './commands';
import {
  PostCreatedHandler,
  PostLikedHandler,
  PostTimeUpdatedHandler,
} from './events';

export const CommandHandlers = [
  CreatePostHandler,
  LikePostHandler,
  UpdatePostTimeHandler,
];
export const EventHandlers = [
  PostCreatedHandler,
  PostLikedHandler,
  PostTimeUpdatedHandler,
];

@Module({
  imports: [CqrsModule, PostsDataAccessModule],
  providers: [PostService, ...CommandHandlers, ...EventHandlers],
  exports: [PostService],
})
export class PostsModule {}
