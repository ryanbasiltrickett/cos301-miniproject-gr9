import { NewsfeedRepository } from '@mp/api/newsfeed/data-access';
import { IgenNewsfeedResponse ,genNewsfeedCommand } from "@mp/api/newsfeed/util";
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
//import { /* */ } from '../models';

@CommandHandler(genNewsfeedHandler)
export class genNewsfeedHandler
  implements ICommandHandler<genNewsfeedCommand,IgenNewsfeedResponse>
{
    constructor(
      private publisher: EventPublisher,
      private readonly repository:(NewsfeedRepository)
      ) {}
    async execute(command: genNewsfeedCommand): Promise<any> {
        //Unimplemented
        console.log(`${genNewsfeedHandler.name}`);
        const request = command.request;
    }
}
