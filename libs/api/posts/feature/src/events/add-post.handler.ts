import { PostRepository } from '@mp/api/posts/data-access';
import { AddPostEvent } from '@mp/api/posts/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(AddPostEvent)
export class AddPostHandler
  implements IEventHandler<AddPostEvent>
{
  constructor(private readonly repository: PostRepository) {}

  async handle(event: AddPostEvent) {
    console.log("Not implemented");
  }
}