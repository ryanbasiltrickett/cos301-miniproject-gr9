import {
  IFollowers,
  IuserPosts,
  IPost,

} from '@mp/api/newsfeed/util';
import { AggregateRoot } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';


export class Followers extends AggregateRoot implements IFollowers {
  constructor(
    public UserID: string,
    public followers: string[],
    public lastpost: Timestamp,
    public recentPost: IuserPosts[],
  ) {
    super();
  }

  static fromData(followers: IFollowers): Followers {
    const instance = new Followers(
      followers.UserID,
      followers.followers,
      followers.lastpost,
      followers.recentPost,
    );
    return instance;
  }
}
