import { NewsfeedService } from "@mp/api/newsfeed/feature";
import {
  IupdateNFPostRequest, IupdateNFPostResponse,
  IgeneratePostRequest, IgeneratePostResponse
} from '@mp/api/newsfeed/util'
import { NestFactory } from '@nestjs/core';
import * as functions from 'firebase-functions';
import { CoreModule } from '../core.module';


//This is just here incase i need more functionality later, its not doing anything
export const updateNFPost = functions.https.onCall(
  async (request: IupdateNFPostRequest): Promise<IupdateNFPostResponse> => {
      const app = await NestFactory.createApplicationContext(CoreModule);
      const service = app.get(NewsfeedService);
      return service.updateNFPost(request);
  }
);

export const generatePost = functions.https.onCall(
  async (request: IgeneratePostRequest): Promise<IgeneratePostResponse> =>{
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(NewsfeedService);
    return service.generatePost(request);
  }
);

