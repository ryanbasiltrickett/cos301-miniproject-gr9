import {
  IComment,
  IPost,
} from '@mp/api/newsfeed/util';
import { AggregateRoot } from '@nestjs/cqrs';

export class Post extends AggregateRoot implements IPost {
  // have yet to add hashtag and location
  constructor(
    public id: string,
    public likes: number,
    public author: string,
    public published: FirebaseFirestore.Timestamp,
    public time: number,
    public description?: string | null | undefined,
    public imageURL?: string | null | undefined,
    public comments?: IComment[]
  ) {
    super();
  }

  static fromData(post: IPost): Post {
    const instance = new Post(
      post.id,
      post.likes,
      post.author,
      post.published,
      post.time,
      post.description,
      post.mediaUrl,
      post.comments
    );
    return instance;
  }


}
