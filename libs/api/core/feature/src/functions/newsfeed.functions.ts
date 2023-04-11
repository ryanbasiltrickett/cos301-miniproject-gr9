import { NewsfeedService } from "@mp/api/newsfeed/feature";
import {
  IgenNewsfeedRequest,IgenNewsfeedResponse,
  IupdateNFPostRequest, IupdateNFPostResponse
} from '@mp/api/newsfeed/util'
import { NestFactory } from '@nestjs/core';
import * as functions from 'firebase-functions';
import { NotImplementedException } from '@nestjs/common';
import { CoreModule } from '../core.module';

export const genNewsfeed = functions.https.onCall(async ( request: IgenNewsfeedRequest): Promise<IgenNewsfeedResponse> => {
  const app = await NestFactory.createApplicationContext(CoreModule);
  const service = app.get(NewsfeedService);
  return service.genNewsfeed(request);
});

export const updateNFPost = functions.https.onCall(async ( request: IupdateNFPostRequest): Promise<IupdateNFPostResponse> =>{
  const app = await NestFactory.createApplicationContext(CoreModule);
  const service = app.get(NewsfeedService);
  return service.updateNFPost(request);
});

export const generatePost = functions.https.onCall(async ( request: IgenNewsfeedRequest): Promise<IgenNewsfeedResponse> =>{
  const app = await NestFactory.createApplicationContext(CoreModule);
  const service = app.get(NewsfeedService);
  return service.generatePost(request);
}
)

