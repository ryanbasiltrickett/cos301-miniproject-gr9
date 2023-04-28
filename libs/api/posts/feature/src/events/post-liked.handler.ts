import { PostsRepository } from '@mp/api/posts/data-access';
import { PostLikedEvent } from '@mp/api/posts/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(PostLikedEvent)
export class PostLikedHandler
  implements IEventHandler<PostLikedEvent>
{
  constructor(private readonly repository: PostsRepository) {}

  async handle(event: PostLikedEvent) {
    console.log(`${PostLikedHandler.name}`);
    await this.repository.updatePost(event.post);
  }
}