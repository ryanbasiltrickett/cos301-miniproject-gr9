import { QueryHandler, IQueryHandler, EventPublisher } from '@nestjs/cqrs';
import { generatePostQuery, IgeneratePostResponse, IFollowers,IuserPosts,IPost, IPostArray } from '@mp/api/newsfeed/util';
import { NewsfeedRepository } from '@mp/api/newsfeed/data-access';
import { NotImplementedException } from '@nestjs/common';
import { Followers ,Post} from '../models';

// query handler
@QueryHandler(generatePostHandler)
export class generatePostHandler implements IQueryHandler<generatePostQuery,IgeneratePostResponse> {
  constructor(
    private publisher: EventPublisher,
    private readonly repository:(NewsfeedRepository)
    ) {}

  async execute(query: generatePostQuery) : Promise<any> {
    const request = query.request;
    let userDoc = await this.repository.getFollowers(request.userID);
    let userData = userDoc.data();
    if (!userData) throw new Error('User not found');

    console.log(userData);
    console.log(userDoc);

    const follower = this.publisher.mergeObjectContext(
      Followers.fromData(userData)
    );

    const followerIDs: string[] = follower.followers;
    let size = 20;
    const posts: IPost[] = [];
    if (followerIDs.length < 20) size=followerIDs.length;
    let count = 0;

    //Very Temporary
    for (count =0; count <size; count++) {
      userDoc = await this.repository.getFollowers(followerIDs[count]);
      userData = userDoc.data();
      const postDoc = await this.repository.generatePosts(follower.recentPost[0].postID);
      const postData = postDoc.data();
      if (postData) { posts.push(postData)};

    }
    const postArray: IPostArray = {posts: posts}

    const response: IgeneratePostResponse = {posts: postArray};

    return response;
  }
}
