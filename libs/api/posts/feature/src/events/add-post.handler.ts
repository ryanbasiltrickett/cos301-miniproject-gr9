import { PostRepository } from '@mp/api/posts/data-access';
import { NewPostEvent } from '@mp/api/posts/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NewPostEvent)
export class AddPostHandler
  implements IEventHandler<NewPostEvent>
{
  constructor(private readonly repository: PostRepository) {}

  async handle(event: NewPostEvent) {
    console.log("Not implemented");
  }
}