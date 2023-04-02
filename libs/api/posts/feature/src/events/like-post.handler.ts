import { PostsRepository } from '@mp/api/posts/data-access';
import { LikePostEvent } from '@mp/api/posts/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(LikePostEvent)
export class LikePostHandler
  implements IEventHandler<LikePostEvent>
{
  constructor(private readonly repository: PostsRepository) {}

  async handle(event: LikePostEvent) {
    console.log("Not implemented");
  }
}