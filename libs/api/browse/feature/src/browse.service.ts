import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
    IGetUserRequest,
    IGetUserResponse,
    GetUserQuery,
    IGetTrendingRequest,
    IGetTrendingResponse,
    GetTrendingQuery
} from '@mp/api/browse/util';

@Injectable()
export class BrowseService{
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ){}

    async getUser(
        request: IGetUserRequest
    ): Promise<IGetUserResponse>{
        return await this.queryBus.execute<
        GetUserQuery,
        IGetUserResponse
        >(new GetUserQuery(request))
    }

    async getTrending(
        request: IGetTrendingRequest
    ): Promise<IGetTrendingResponse>{
        return await this.queryBus.execute<
        GetTrendingQuery,
        IGetTrendingResponse
        >(new GetTrendingQuery(request))
    }
}