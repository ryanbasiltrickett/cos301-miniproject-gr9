import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';
import { AddPostCommand, IPost } from '@mp/api/posts/util';
import { Post } from '../models';

@CommandHandler(AddPostCommand)
export class AddPostHandler implements ICommandHandler<AddPostCommand> {
  constructor(private publisher: EventPublisher) {}

  async execute(command: AddPostCommand) {
    console.log('Attempting to create a post');

    const request = command.request;

    const data: IPost = request.post;

    const post = this.publisher.mergeObjectContext(Post.fromData(data));

    post.create();
    post.commit();
  }
}
