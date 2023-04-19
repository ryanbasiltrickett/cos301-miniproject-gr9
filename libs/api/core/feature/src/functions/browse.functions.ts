import { BrowseService } from "@mp/api/browse/feature";
import {
  IGetUserRequest, 
  IGetUserResponse
} from '@mp/api/browse/util'
import { NestFactory } from '@nestjs/core';
import * as functions from 'firebase-functions';
import { CoreModule } from '../core.module';
import { request } from "http";


export const getUser = functions.https.onCall(
  async (request: IGetUserRequest): Promise<IGetUserResponse> =>{
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(BrowseService);
    return service.getUser(request);
  }
);

// export const getTrending = functions.https.onCall(
//   async (request: )
// )