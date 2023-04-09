import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';
import { CreatePostCommand, IPost } from '@mp/api/posts/util';
import { Post } from '../models';

@CommandHandler(CreatePostCommand)
export class CreatePostHandler implements ICommandHandler<CreatePostCommand> {
  constructor(private publisher: EventPublisher) {}

  async execute(command: CreatePostCommand) {
    console.log(CreatePostHandler.name);

    const request = command.request;

    const data: IPost = {
      id: 'overwrite_please',
      author: request.post.poster,
      published: Timestamp.now(),
      description: request.post.description,
      mediaUrl: request.post.mediaUrl,
      likes: 0,
    };

    const post = this.publisher.mergeObjectContext(Post.fromData(data));

    post.create();
    post.commit();
  }
}
