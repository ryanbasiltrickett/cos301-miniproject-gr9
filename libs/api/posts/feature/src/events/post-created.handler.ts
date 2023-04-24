import { PostsRepository } from '@mp/api/posts/data-access';
import { NewPostEvent } from '@mp/api/posts/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NewPostEvent)
export class PostCreatedHandler implements IEventHandler<NewPostEvent> {
  constructor(private readonly repository: PostsRepository) {}

  async handle(event: NewPostEvent) {
    console.log(`${PostCreatedHandler.name}`);
    await this.repository.createPost(event.post);
  }
}
