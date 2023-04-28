import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { IDeleteCommentResponse, DeleteCommentCommand, IComment } from '@mp/api/posts/util';
import { PostsRepository } from '@mp/api/posts/data-access';
import { Post } from '../models';

@CommandHandler(DeleteCommentCommand)
export class DeleteCommentHandler implements ICommandHandler<DeleteCommentCommand> {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: PostsRepository
  ) {}

  async execute(command: DeleteCommentCommand) {
    console.log(`${DeleteCommentHandler.name}`);

    const request = command.request;
    if (!request.post) throw new Error("Post not set");
    const postDoc = await this.repository.findOne(request.post);
    const postData = postDoc.data();

    if (!postData) throw new Error('Post not found');
    if (request.index == -1) throw new Error('Post Comment not found');


    const post = this.publisher.mergeObjectContext(Post.fromData(postData));
    post.deleteComment(request.index);
    post.commit();

    const response: IDeleteCommentResponse = {post};
    return response;
  }
}

