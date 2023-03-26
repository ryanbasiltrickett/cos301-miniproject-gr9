import { PostService } from '@mp/api/posts/feature';
import {} from '@mp/api/posts/util';
import { NestFactory } from '@nestjs/core';
import * as functions from 'firebase-functions';
import { CoreModule } from '../core.module';

export const addPost = functions.https.onCall(

);

export const likePost = functions.https.onCall(

);

export const commentPost = functions.https.onCall(

);

export const deletePost = functions.https.onCall(

);