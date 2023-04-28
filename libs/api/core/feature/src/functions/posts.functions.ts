import { PostService } from '@mp/api/posts/feature';
import {
  ICreatePostRequest,
  IAddPostResponse,
  ICommentPostRequest,
  ICommentPostResponse,
  ILikePostRequest,
  ILikePostResponse,
  IDeletePostRequest,
  IDeletePostResponse,
  IUpdatePostTimeRequest,
  IUpdatePostTimeResponse,
  IAddCommentRequest,
  IAddCommentResponse,
  IDeleteCommentRequest,
  IDeleteCommentResponse,
} from '@mp/api/posts/util';
import { NestFactory } from '@nestjs/core';
import * as functions from 'firebase-functions';
import { CoreModule } from '../core.module';

export const createPost = functions.https.onCall(
  async (request: ICreatePostRequest): Promise<IAddPostResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(PostService);
    return service.createPost(request);
  }
);

export const updatePostLikes = functions.https.onCall(
  async (request: ILikePostRequest): Promise<ILikePostResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(PostService);
    return service.likePost(request);
  }
);

export const updateComments = functions.https.onCall(
  async (request: ICommentPostRequest): Promise<ICommentPostResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(PostService);
    return service.updateComments(request);
  }
);

export const deletePost = functions.https.onCall(
  async (request: IDeletePostRequest): Promise<IDeletePostResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(PostService);
    return service.deletePost(request);
  }
);

export const updatePostTime = functions.https.onCall(
  async (request: IUpdatePostTimeRequest): Promise<IUpdatePostTimeResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(PostService);
    return service.updatePostTime(request);
  }
);

export const addComment = functions.https.onCall(
  async (request: IAddCommentRequest): Promise<IAddCommentResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(PostService);
    return service.addComment(request);
  }
);

export const deleteComment = functions.https.onCall(
  async (request: IDeleteCommentRequest): Promise<IDeleteCommentResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(PostService);
    return service.deleteComment(request);
  }
);
