import { PostService } from '@mp/api/posts/feature';
import {IPostRequest,
        IAddPostResponse,
        ICommentRequest,
        ICommentPostResponse,
        ILikeRequest,
        ILikePostResponse,
        IDeletePostRequest,
        IDeletePostResponse} from '@mp/api/posts/util';
import { NestFactory } from '@nestjs/core';
import * as functions from 'firebase-functions';
import { CoreModule } from '../core.module';

export const addPost = functions.https.onCall(
    async (
        request: IPostRequest
      ): Promise<IAddPostResponse> => {
        const app = await NestFactory.createApplicationContext(CoreModule);
        const service = app.get(PostService);
        return service.addPost(request);
      }
);

export const likePost = functions.https.onCall(
    async (
        request: ILikeRequest
      ): Promise<ILikePostResponse> => {
        const app = await NestFactory.createApplicationContext(CoreModule);
        const service = app.get(PostService);
        return service.likePost(request);
      }
);

export const commentPost = functions.https.onCall(
    async (
        request: ICommentRequest
      ): Promise<ICommentPostResponse> => {
        const app = await NestFactory.createApplicationContext(CoreModule);
        const service = app.get(PostService);
        return service.commentPost(request);
      }
);

export const deletePost = functions.https.onCall(
    async (
        request: IDeletePostRequest
      ): Promise<IDeletePostResponse> => {
        const app = await NestFactory.createApplicationContext(CoreModule);
        const service = app.get(PostService);
        return service.deletePost(request);
      }
);