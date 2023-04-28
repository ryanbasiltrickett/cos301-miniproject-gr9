import { PostsRepository } from '@mp/api/posts/data-access';
import { ProfilesRepository } from '@mp/api/profiles/data-access';
import { UpdatePostTimeCommand } from '@mp/api/posts/util';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Post } from '../models';
import { Profile } from '@mp/api/profiles/feature';

@CommandHandler(UpdatePostTimeCommand)
export class UpdatePostTimeHandler
  implements ICommandHandler<UpdatePostTimeCommand>
{
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: PostsRepository,
    private readonly profileRepo: ProfilesRepository
  ) {}

  async execute(command: UpdatePostTimeCommand) {
    console.log(`${UpdatePostTimeCommand.name}`);

    const request = command.request;
    const postDoc = await this.repository.findOne(request.post);
    const postData = postDoc.data();

    if (!postData) throw new Error('Post not found');

    const post = this.publisher.mergeObjectContext(Post.fromData(postData));

    post.updateTime(request.amount);
    post.commit();

    const profileDoc = await this.profileRepo.findOne(request.profile);
    const profileData = profileDoc.data();

    if (!profileData) throw new Error('Profile not found');

    const profile = this.publisher.mergeObjectContext(Profile.fromData(profileData));

    profile.decreaseTime(request.amount);
    profile.commit();
  }
}
