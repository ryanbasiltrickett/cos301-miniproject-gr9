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

    // Updating post time
    const request = command.request;
    const postDoc = await this.repository.findOne(request.post);
    const postData = postDoc.data();

    if (!postData) throw new Error('Post not found');

    const post = this.publisher.mergeObjectContext(Post.fromData(postData));

    post.updateTime(request.amount);
    post.commit();

    // Updating poster's time
    if (!postData.authorId) throw new Error('Post author not found');
    const posterDoc = await this.profileRepo.findOneById(postData.authorId);
    const posterData = posterDoc.data();

    if (!posterData) throw new Error('Poster Profile not found');

    const poster = this.publisher.mergeObjectContext(Profile.fromData(posterData));

    poster.increaseTime(request.amount);
    poster.commit();
    
    // Decreasing the person gave time's time
    const profileDoc = await this.profileRepo.findOne(request.profile);
    const profileData = profileDoc.data();

    if (!profileData) throw new Error('Profile not found');

    const profile = this.publisher.mergeObjectContext(Profile.fromData(profileData));

    profile.decreaseTime(request.amount);
    profile.commit();
  }
}
