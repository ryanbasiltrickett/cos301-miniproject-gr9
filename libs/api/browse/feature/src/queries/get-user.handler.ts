import { QueryHandler, IQueryHandler, EventPublisher, InvalidQueryHandlerException } from '@nestjs/cqrs';
import { GetUserQuery, IGetUserResponse } from '@mp/api/browse/util';
//TODO: Browse Repo
import { BrowseRepository } from '@mp/api/browse/data-access';

// query handler
@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery, IGetUserResponse> {
  constructor(
    private publisher: EventPublisher,
    private readonly repository:(BrowseRepository)
    ) {}

  async execute(query: GetUserQuery) : Promise<any> {
    const request = query.request;
    const username = request.user;
    const response: IGetUserResponse = {user: request.user};
    if(username){
        await this.repository.getUser(username);
        return response;
    }else{
        throw new InvalidQueryHandlerException();
    }

  }
}
