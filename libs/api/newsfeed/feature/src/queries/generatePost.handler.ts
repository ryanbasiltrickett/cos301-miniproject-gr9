import { QueryHandler, IQueryHandler, EventPublisher } from '@nestjs/cqrs';
import { generatePostQuery, IgeneratePostResponse } from '@mp/api/newsfeed/util';
import { NewsfeedRepository } from '@mp/api/newsfeed/data-access';
import { NotImplementedException } from '@nestjs/common';

// query handler
@QueryHandler(generatePostHandler)
export class generatePostHandler implements IQueryHandler<generatePostQuery,IgeneratePostResponse> {
  constructor(
    private publisher: EventPublisher,
    private readonly repository:(NewsfeedRepository)
    ) {}

  async execute(query: generatePostQuery) : Promise<any> {
    const request = query.request;
    const followersDoc = await this.repository.getFollowers(request.userInfo);
    const followers = followersDoc.data();

    //const posts = await this.repository.generatePosts(followers.)
    //const data = post.data();

    return NotImplementedException;
  }
}
