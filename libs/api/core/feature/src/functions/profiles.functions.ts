import { ProfilesService } from '@mp/api/profiles/feature';
import {
    IUpdateAccountDetailsRequest,
    IUpdateAccountDetailsResponse,
    // IUpdateAddressDetailsRequest,
    // IUpdateAddressDetailsResponse,
    // IUpdateContactDetailsRequest,
    // IUpdateContactDetailsResponse,
    // IUpdateOccupationDetailsRequest,
    // IUpdateOccupationDetailsResponse,
    // IUpdatePersonalDetailsRequest,
    // IUpdatePersonalDetailsResponse
} from '@mp/api/profiles/util';
import { NestFactory } from '@nestjs/core';
import * as functions from 'firebase-functions';
import { CoreModule } from '../core.module';
import { IGetPost } from '@mp/api/browse/util';

export const updateAccountDetails = functions.https.onCall(
  async (
    request: IUpdateAccountDetailsRequest
  ): Promise<IUpdateAccountDetailsResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(ProfilesService);
    return service.updateAccountDetails(request);
  }
);

export const getUserPosts = functions.https.onCall(
  async(
    request: string
  ): Promise<IGetPost> =>{
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(ProfilesService);
    return service.getUserPosts(request);
  }
)
