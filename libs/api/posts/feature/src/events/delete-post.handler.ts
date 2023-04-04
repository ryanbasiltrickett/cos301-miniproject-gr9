import { PostRepository } from '@mp/api/posts/data-access';
import { DeletePostEvent } from '@mp/api/posts/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(DeletePostEvent)
export class DeletePostHandler
  implements IEventHandler<DeletePostEvent>
{
  constructor(private readonly repository: PostRepository) {}

  async handle(event: DeletePostEvent) {
    console.log("Not implemented");
  }
}