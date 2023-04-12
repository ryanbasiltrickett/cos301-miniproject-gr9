import {
  IgenNewsfeedRequest,IgenNewsfeedResponse,genNewsfeedCommand,
  IupdateNFPostRequest,IupdateNFPostResponse,updateNFPostCommand,
  generatePostQuery, IgeneratePostRequest, IgeneratePostResponse
} from '@mp/api/newsfeed/util'
import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Query } from 'firebase-admin/firestore';

@Injectable()
export class  NewsfeedService {

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
    ) {}

    async genNewsfeed(
      request: IgenNewsfeedRequest
    ): Promise<IgenNewsfeedResponse> {
      return await this.commandBus.execute<
        genNewsfeedCommand,
        IgenNewsfeedResponse
      >(new genNewsfeedCommand(request));
    }

    async updateNFPost(
      request: IupdateNFPostRequest
    ): Promise<IupdateNFPostResponse> {
      return await this.commandBus.execute<
      updateNFPostCommand,
      IupdateNFPostResponse
      >(new updateNFPostCommand(request));
    }

    async generatePost(
      request: IgeneratePostRequest
    ): Promise<IgeneratePostResponse> {
      return await this.queryBus.execute<
      generatePostQuery,
      IgeneratePostResponse
      >(new generatePostQuery(request))
    }
}
