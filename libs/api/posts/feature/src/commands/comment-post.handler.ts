import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';
import { CommentPostCommand } from '@mp/api/posts/util';
import { NotImplementedException } from '@nestjs/common';
import { Post } from '../models';
import { PostsRepository } from '@mp/api/posts/data-access';

@CommandHandler(CommentPostCommand)
export class CommentPostHandler implements ICommandHandler<CommentPostCommand> {
  constructor(private publisher: EventPublisher, private repository: PostsRepository ) {}

  async execute(command: CommentPostCommand) {

    // const request = command.request;
    // const postId = request.postId ? request.postId: ''
    // const postDoc = await this.repository.findPost(postId);
    // const postData = postDoc.data();

    // if (!postData) throw new Error('Post not found');

    // const post = this.publisher.mergeObjectContext(Post.fromData(postData));

    // if (!request.post.likes) throw new Error('Post likes not found');
    // post.likePost();
    // post.commit();
    // // event to take time down Sim
    // const response: ILikePostResponse = { post };

    // return response;
  }
}
