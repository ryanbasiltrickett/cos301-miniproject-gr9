import { QueryHandler, IQueryHandler, EventPublisher, InvalidQueryHandlerException } from '@nestjs/cqrs';
import { generatePostQuery, IgeneratePostResponse } from '@mp/api/newsfeed/util';
import { NewsfeedRepository } from '@mp/api/newsfeed/data-access';

// query handler
@QueryHandler(generatePostHandler)
export class generatePostHandler implements IQueryHandler<generatePostQuery,IgeneratePostResponse> {
  constructor(
    private publisher: EventPublisher,
    private readonly repository:(NewsfeedRepository)
    ) {}

  async execute(query: generatePostQuery) : Promise<any> {
    const request = query.request;
    const profile = request.profile;
    const limit = request.limit ?? 10; //defualt limit if limit is null ie not specified
    if (profile) {
      const response = await this.repository.getNewsfeed(profile, limit);
      return response;
    } else {
      throw new InvalidQueryHandlerException();
    }
  }
}
