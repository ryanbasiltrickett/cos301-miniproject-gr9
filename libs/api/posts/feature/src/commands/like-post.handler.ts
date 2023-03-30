import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';
import { LikePostCommand } from '@mp/api/posts/util';


@CommandHandler(LikePostCommand)
export class LikePostHandler
  implements ICommandHandler<LikePostCommand>
{
  constructor(private publisher: EventPublisher) {}

  async execute(command: LikePostCommand) {
    console.log("Not implemented")
  }
}