import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PostsModule as PostsDataAccessModule } from '@mp/api/posts/data-access';
import { PostService } from './posts.service';
import {
  GenerateEventHandler,
} from './commands';

import {
    EventGeneratedHandler
} from './events';

export const CommandHandlers = [
    GenerateEventHandler,
];
export const EventHandlers = [
    EventGeneratedHandler,
];

@Module({
  imports: [CqrsModule, PostsDataAccessModule],
  providers: [PostService, ...CommandHandlers, ...EventHandlers],
  exports: [PostService],
})
export class PostsModule {}