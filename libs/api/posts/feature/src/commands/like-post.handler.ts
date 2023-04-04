import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';
import { ILikePostResponse, LikePostCommand } from '@mp/api/posts/util';
import { PostsRepository } from '@mp/api/posts/data-access';
import { Post } from '../models';

@CommandHandler(LikePostCommand)
export class LikePostHandler implements ICommandHandler<LikePostCommand> {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: PostsRepository
  ) {}

  async execute(command: LikePostCommand) {
    console.log('Attpempting to update the like count for a post');
    console.log(`${LikePostCommand.name}`);

    const request = command.request;
    const postDoc = await this.repository.findOne(request.post);
    const postData = postDoc.data();

    if (!postData) throw new Error('Post not found');

    const post = this.publisher.mergeObjectContext(Post.fromData(postData));

    if (!request.post.likes) throw new Error('Post likes not found');
    post.likePost();
    post.commit();

    const response: ILikePostResponse = { post };
    return response;
  }
}
