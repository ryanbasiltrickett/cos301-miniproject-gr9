import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
    IGetUserRequest,
    IGetUserResponse,
    GetUserQuery
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
        console.log("Here");
        return await this.queryBus.execute<
        GetUserQuery,
        IGetUserResponse
        >(new GetUserQuery(request))
    }
}