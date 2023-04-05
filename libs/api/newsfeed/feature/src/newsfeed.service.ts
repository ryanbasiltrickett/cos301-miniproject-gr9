import {
  IgenNewsfeedRequest,IgenNewsfeedResponse,genNewsfeedCommand,
  IupdateNFPostRequest,IupdateNFPostResponse,updateNFPostCommand
} from '@mp/api/newsfeed/util'
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class  NewsfeedService {
  constructor(private readonly commandBus: CommandBus) {}

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
      IgenNewsfeedResponse
      >(new updateNFPostCommand(request));
    }
}
