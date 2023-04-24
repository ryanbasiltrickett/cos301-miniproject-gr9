import { PostsRepository } from '@mp/api/posts/data-access';
import { UpdatePostTimeCommand } from '@mp/api/posts/util';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Post } from '../models';

@CommandHandler(UpdatePostTimeCommand)
export class UpdatePostTimeHandler
  implements ICommandHandler<UpdatePostTimeCommand>
{
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: PostsRepository
  ) {}

  async execute(command: UpdatePostTimeCommand) {
    console.log(`${UpdatePostTimeCommand.name}`);

    const request = command.request;
    const postDoc = await this.repository.findOne(request.post);
    const postData = postDoc.data();

    if (!postData) throw new Error('Post not found');

    const post = this.publisher.mergeObjectContext(Post.fromData(postData));

    post.updateTime();
    post.commit();
  }
}
