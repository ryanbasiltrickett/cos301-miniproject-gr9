import { NewsfeedRepository } from '@mp/api/newsfeed/data-access';
import { IupdateNFPostResponse ,updateNFPostCommand } from "@mp/api/newsfeed/util";
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
//import { /* */ } from '../models';

@CommandHandler(updateNFPostHandler)
export class updateNFPostHandler
  implements ICommandHandler<updateNFPostCommand,IupdateNFPostResponse>
{
    constructor(
      private publisher: EventPublisher,
      private readonly repository:(NewsfeedRepository)
      ) {}
    async execute(command: updateNFPostCommand): Promise<any> {
        //Unimplemented
        console.log(`${updateNFPostHandler.name}`);
        const request = command.request;
    }
}
