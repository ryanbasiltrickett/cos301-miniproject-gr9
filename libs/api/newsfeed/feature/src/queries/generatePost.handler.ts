import { QueryHandler, IQueryHandler, EventPublisher, InvalidQueryHandlerException } from '@nestjs/cqrs';
import { generatePostQuery, IgeneratePostResponse, IFollowers,IPost, IPostArray } from '@mp/api/newsfeed/util';
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
    if (request.profile != null) {
      const response = await this.repository.getNewsfeed(request.profile);
      return response;
    } else {
      throw new InvalidQueryHandlerException();
    }
  }
}
