import {
  IFollowers,
  IPost,
  IRecentPost

} from '@mp/api/newsfeed/util';
import { AggregateRoot } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';


export class Followers extends AggregateRoot implements IFollowers {
  constructor(
    public followers: string[],
    public lastPost: Timestamp,
    public recentPosts: IRecentPost[],
  ) {
    super();
  }

  static fromData(followers: IFollowers): Followers {
    const instance = new Followers(
      followers.followers,
      followers.lastPost,
      followers.recentPosts,
    );
    return instance;
  }
}
