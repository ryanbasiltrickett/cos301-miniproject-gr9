import { PostService } from '@mp/api/posts/feature';
import {IAddPostRequest,
        IAddPostResponse,
        ICommentPostRequest,
        ICommentPostResponse,
        ILikePostRequest,
        ILikePostResponse,
        IDeletePostRequest,
        IDeletePostResponse} from '@mp/api/posts/util';
import { NestFactory } from '@nestjs/core';
import * as functions from 'firebase-functions';
import { CoreModule } from '../core.module';

export const addPost = functions.https.onCall(
    async (
        request: IAddPostRequest
      ): Promise<IAddPostResponse> => {
        const app = await NestFactory.createApplicationContext(CoreModule);
        const service = app.get(PostService);
        return service.addPost(request);
      }
);

export const updatePostLikes = functions.https.onCall(
    async (
        request: ILikePostRequest
      ): Promise<ILikePostResponse> => {
        const app = await NestFactory.createApplicationContext(CoreModule);
        const service = app.get(PostService);
        return service.likePost(request);
      }
);

export const commentPost = functions.https.onCall(
    async (
        request: ICommentPostRequest
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