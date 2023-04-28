import {
  CommentAddedEvent,
  CommentDeletedEvent,
  IComment,
  IPost,
  NewPostEvent,
  PostLikedEvent,
  PostTimeUpdatedEvent,
} from '@mp/api/posts/util';
import { AggregateRoot } from '@nestjs/cqrs';

export class Post extends AggregateRoot implements IPost {
  // have yet to add hashtag and location
  constructor(
    public id: string,
    public likes: number,
    public author: string,
    public published: FirebaseFirestore.Timestamp,
    public time: number,
    public authorId: string | undefined,
    public description?: string | null | undefined,
    public imageURL?: string | null | undefined,
    public comments?: IComment[],

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
      post.authorId,
      post.description,
      post.mediaUrl,
      post.comments,
    );
    return instance;
  }

  create() {
    this.apply(new NewPostEvent(this.toJSON()));
  }

  likePost() {
    this.likes += 5;
    this.apply(new PostLikedEvent(this.toJSON()));
  }

  addComment(comment: IComment) {
    this.comments?.push(comment);
    this.apply(new CommentAddedEvent(this.toJSON()));
  }


  deleteComment(index: number) {
    if (index != -1) {
      this.comments?.splice(index,1);
      this.apply(new CommentDeletedEvent(this.toJSON()));
    }

  }

  updateTime(increaseByAmount: number) {
    this.time += increaseByAmount;
    this.apply(new PostTimeUpdatedEvent(this.toJSON()));
  }

  // updateComment() {
  //   this.apply(new )
  // }

  toJSON() {
    return {
      id: this.id,
      description: this.description,
      likes: this.likes,
      published: this.published,
      image: this.imageURL,
      comments: this.comments,
      author: this.author,
      time: this.time,
      authorId: this.authorId
    };
  }
}
