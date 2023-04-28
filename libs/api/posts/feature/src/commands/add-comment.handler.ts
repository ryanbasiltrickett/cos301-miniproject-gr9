import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { IAddCommentResponse, AddCommentCommand, IComment } from '@mp/api/posts/util';
import { PostsRepository } from '@mp/api/posts/data-access';
import { Post } from '../models';

@CommandHandler(AddCommentCommand)
export class AddCommentHandler implements ICommandHandler<AddCommentCommand> {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: PostsRepository
  ) {}

  async execute(command: AddCommentCommand) {
    console.log(`${AddCommentHandler.name}`);

    const request = command.request;
    if (!request.post) throw new Error("Post not set");
    const postDoc = await this.repository.findOne(request.post);
    const postData = postDoc.data();

    if (!postData) throw new Error('Post not found');
    if (!request.comment) throw new Error('Post Comment not found');
    if (!request.userId) throw new Error('comment User ID not found');
    if (!request.username) throw new Error('username not found');

    const data: IComment = {
      userId: request.userId,
      text: request.comment,
      username: request.username
    };

    const post = this.publisher.mergeObjectContext(Post.fromData(postData));
    post.addComment(data);
    post.commit();

    const response: IAddCommentResponse = {post};
    return response;
  }
}

