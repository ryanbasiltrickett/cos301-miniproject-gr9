import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';
import { DeletePostCommand } from '@mp/api/posts/util';
import { NotImplementedException } from '@nestjs/common';

@CommandHandler(DeletePostCommand)
export class DeletePostHandler implements ICommandHandler<DeletePostCommand> {
  constructor(private publisher: EventPublisher) {}

  async execute(command: DeletePostCommand) {
    return NotImplementedException;
  }
}
