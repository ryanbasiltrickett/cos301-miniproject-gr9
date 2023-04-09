import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';
import { CommentPostCommand } from '@mp/api/posts/util';
import { NotImplementedException } from '@nestjs/common';

@CommandHandler(CommentPostCommand)
export class CommentPostHandler implements ICommandHandler<CommentPostCommand> {
  constructor(private publisher: EventPublisher) {}

  async execute(command: CommentPostCommand) {
    return NotImplementedException;
  }
}
