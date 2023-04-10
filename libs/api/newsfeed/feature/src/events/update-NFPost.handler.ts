import { NewsfeedRepository } from '@mp/api/newsfeed/data-access';
import { updateNFPostEvent } from '@mp/api/newsfeed/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(updateNFPostEvent)
export class updateNFPostHandler
  implements IEventHandler<updateNFPostEvent>
{
  constructor(private readonly repository: NewsfeedRepository) {}

  async handle(event: updateNFPostEvent) {
    console.log(`${updateNFPostHandler.name}`);
    await this.repository.createNewsfeed(event.dud);
  }
}
