import { QueryHandler, IQueryHandler, EventPublisher, InvalidQueryHandlerException, CommandHandler } from '@nestjs/cqrs';
import { GetTrendingQuery, IGetTrendingResponse } from '@mp/api/browse/util';
//TODO: Browse Repo
import { ProfilesRepository } from '@mp/api/profiles/data-access';
import { GetUserPosts } from '@mp/app/profile/util';
import { GetPostCommand, IGetUserPostResponse } from '@mp/api/profiles/util';

// query handler
@CommandHandler(GetPostCommand)
export class GetUserPostsHandler implements IQueryHandler<GetPostCommand, IGetUserPostResponse> {
  constructor(
    private publisher: EventPublisher,
    private readonly repository:(ProfilesRepository)
    ) {}

  async execute(command: GetPostCommand) : Promise<any> {
    const userId = command.request;
    // const id = request.reqId;
    // const response: IGetUserResponse = {user: request.user};
    if(userId){
        const results = await this.repository.getUserPosts(userId);
        // console.log(results);
        return results;
    }else{
        throw new InvalidQueryHandlerException();
    }

  }
}