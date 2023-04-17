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

export const commentPost = functions.https.onCall(
  async (request: ICommentPostRequest): Promise<ICommentPostResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(PostService);
    return service.commentPost(request);
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
