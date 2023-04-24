import { QueryHandler, IQueryHandler, EventPublisher, InvalidQueryHandlerException } from '@nestjs/cqrs';
import { generatePostQuery, IgeneratePostResponse } from '@mp/api/newsfeed/util';
import { NewsfeedRepository } from '@mp/api/newsfeed/data-access';
import { ExceptionCode } from '@capacitor/core';

// query handler
@QueryHandler(generatePostQuery)
export class generatePostHandler implements IQueryHandler<generatePostQuery,IgeneratePostResponse> {
  constructor(
    private publisher: EventPublisher,
    private readonly repository:(NewsfeedRepository)
    ) {}

  async execute(query: generatePostQuery) : Promise<any> {
    console.log(`${QueryHandler.name}`)
    const request = query.request;
    const limit = request.limit ?? 10; //defualt limit if limit is null ie not specified

      const data = await this.repository.getGlobalFeed(limit);
      const response: IgeneratePostResponse = {
        posts: data
      }
      return response;
  }
}
