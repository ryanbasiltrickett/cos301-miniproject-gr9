import { IGetPost } from '@mp/api/browse/util';
import {
  GetPostCommand,
    IGetUserPostResponse,
    IUpdateAccountDetailsRequest,
    IUpdateAccountDetailsResponse,
    // IUpdateAddressDetailsRequest,
    // IUpdateAddressDetailsResponse,
    // IUpdateContactDetailsRequest,
    // IUpdateContactDetailsResponse,
    // IUpdateOccupationDetailsRequest,
    // IUpdateOccupationDetailsResponse,
    // IUpdatePersonalDetailsRequest,
    // IUpdatePersonalDetailsResponse,
    UpdateAccountDetailsCommand,
    // UpdateAddressDetailsCommand,
    // UpdateContactDetailsCommand,
    // UpdateOccupationDetailsCommand,
    // UpdatePersonalDetailsCommand
} from '@mp/api/profiles/util';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class ProfilesService {
  constructor(private readonly commandBus: CommandBus) {}

  async updateAccountDetails(
    request: IUpdateAccountDetailsRequest
  ): Promise<IUpdateAccountDetailsResponse> {
    return await this.commandBus.execute<
      UpdateAccountDetailsCommand,
      IUpdateAccountDetailsResponse
    >(new UpdateAccountDetailsCommand(request));
  }

  async getUserPosts(
    request: string
  ): Promise<IGetUserPostResponse>{
    return await this.commandBus.execute<
      GetPostCommand,
      IGetUserPostResponse
    >(new GetPostCommand(request));
  }
}
