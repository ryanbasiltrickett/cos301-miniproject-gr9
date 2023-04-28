import { PostsRepository } from '@mp/api/posts/data-access';
import { CommentAddedEvent } from '@mp/api/posts/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(CommentAddedEvent)
export class CommentAddedHandler
  implements IEventHandler<CommentAddedEvent>
{
  constructor(private readonly repository: PostsRepository) {}

  async handle(event: CommentAddedEvent) {
    console.log(`${CommentAddedHandler.name}`);
    await this.repository.updatePost(event.post);
  }
}
