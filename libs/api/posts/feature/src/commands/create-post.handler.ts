import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';
import { CreatePostCommand, IPost,IComment } from '@mp/api/posts/util';
import { Post } from '../models';

@CommandHandler(CreatePostCommand)
export class CreatePostHandler implements ICommandHandler<CreatePostCommand> {
  constructor(private publisher: EventPublisher) {}

  async execute(command: CreatePostCommand) {
    console.log(CreatePostHandler.name);

    const request = command.request;
    console.log(request.post.userId);
    const data: IPost = {
      id: 'overwrite_please',
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      author: request.post.poster!,
      published: Timestamp.now(),
      description: request.post.description,
      mediaUrl: request.post.mediaUrl,
      comments: [],
      likes: 0,
      time: 0,
      authorId: request.post.userId,
    };

    const post = this.publisher.mergeObjectContext(Post.fromData(data));

    post.create();
    post.commit();
  }
}
