import { PostsRepository } from '@mp/api/posts/data-access';
import { PostTimeUpdatedEvent } from '@mp/api/posts/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(PostTimeUpdatedEvent)
export class PostTimeUpdatedHandler implements IEventHandler<PostTimeUpdatedEvent> {
  constructor(private readonly repository: PostsRepository) {}

  async handle(event: PostTimeUpdatedEvent) {
    console.log(`${PostTimeUpdatedHandler.name}`);
    await this.repository.updatePost(event.post);
  }
}