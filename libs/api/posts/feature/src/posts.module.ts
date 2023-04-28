import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PostsModule as PostsDataAccessModule } from '@mp/api/posts/data-access';
import { ProfilesModule as ProfileModuleDataAccessModule } from '@mp/api/profiles/data-access';
import { PostService } from './posts.service'
import {
  CreatePostHandler,
  LikePostHandler,
  UpdatePostTimeHandler,
  AddCommentHandler,
  DeleteCommentHandler
} from './commands';
import {
  PostCreatedHandler,
  PostLikedHandler,
  PostTimeUpdatedHandler,
  CommentAddedHandler,
  CommentDeletedHandler
} from './events';

export const CommandHandlers = [
  CreatePostHandler,
  LikePostHandler,
  UpdatePostTimeHandler,
  AddCommentHandler,
  DeleteCommentHandler
];
export const EventHandlers = [
  PostCreatedHandler,
  PostLikedHandler,
  PostTimeUpdatedHandler,
  CommentAddedHandler,
  CommentDeletedHandler
];

@Module({
  imports: [CqrsModule, PostsDataAccessModule, ProfileModuleDataAccessModule],
  providers: [PostService, ...CommandHandlers, ...EventHandlers],
  exports: [PostService],
})
export class PostsModule {}
