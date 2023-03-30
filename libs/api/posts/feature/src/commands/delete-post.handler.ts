import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';
import { DeletePostCommand } from '@mp/api/posts/util';


@CommandHandler(DeletePostCommand)
export class DeletePostHandler
  implements ICommandHandler<DeletePostCommand>
{
  constructor(private publisher: EventPublisher) {}

  async execute(command: DeletePostCommand) {
    console.log("Not implemented")
  }
}