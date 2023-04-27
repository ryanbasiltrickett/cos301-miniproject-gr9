import { PostsRepository } from '@mp/api/posts/data-access';
import { DeletePostEvent } from '@mp/api/posts/util';
import { NotImplementedException } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(DeletePostEvent)
export class DeletePostHandler implements IEventHandler<DeletePostEvent> {
  constructor(private readonly repository: PostsRepository) {}

  async handle(event: DeletePostEvent) {
    return NotImplementedException;
  }
}
