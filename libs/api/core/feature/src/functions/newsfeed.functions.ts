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
  return request;//dud
});

export const updateFeed = functions.https.onCall(async ( request: IupdateNFPostRequest): Promise<IupdateNFPostResponse> =>{
  return request;
});


