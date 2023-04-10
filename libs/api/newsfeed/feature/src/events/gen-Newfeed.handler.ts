import { NewsfeedRepository } from '@mp/api/newsfeed/data-access';
import { genNewsfeedEvent } from '@mp/api/newsfeed/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(genNewsfeedEvent)
export class genNewsfeedHandler
  implements IEventHandler<genNewsfeedEvent>
{
  constructor(private readonly repository: NewsfeedRepository) {}

  async handle(event: genNewsfeedEvent) {
    console.log(`${genNewsfeedHandler.name}`);
    await this.repository.createNewsfeed(event.dud);
  }
}
