import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';
import { AddPostCommand } from '@mp/api/posts/util';


@CommandHandler(AddPostCommand)
export class AddPostHandler
  implements ICommandHandler<AddPostCommand>
{
  constructor(private publisher: EventPublisher) {}

  async execute(command: AddPostCommand) {
    console.log("Not implemented")
  }
}
