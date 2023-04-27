import { QueryHandler, IQueryHandler, EventPublisher, InvalidQueryHandlerException } from '@nestjs/cqrs';
import { GetTrendingQuery, IGetTrendingResponse } from '@mp/api/browse/util';
//TODO: Browse Repo
import { BrowseRepository } from '@mp/api/browse/data-access';

// query handler
@QueryHandler(GetTrendingQuery)
export class GetTrendingHandler implements IQueryHandler<GetTrendingQuery, IGetTrendingResponse> {
  constructor(
    private publisher: EventPublisher,
    private readonly repository:(BrowseRepository)
    ) {}

  async execute(query: GetTrendingQuery) : Promise<any> {
    const request = query.request;
    const id = request.reqId;
    // const response: IGetUserResponse = {user: request.user};
    if(id){
        const results = await this.repository.getTrending();
        // console.log(results);
        return results;
    }else{
        throw new InvalidQueryHandlerException();
    }

  }
}