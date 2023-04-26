import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import {
  IPost,
  ICreatePostRequest,
  IAddPostResponse,
  ICommentPostRequest,
  ICommentPostResponse,
  IDeletePostRequest,
  IDeletePostResponse,
  ILikePostRequest,
  ILikePostResponse,
  IUpdatePostTimeRequest,
  IUpdatePostTimeResponse,
  IAddCommentRequest,
  IAddCommentResponse,
} from '@mp/api/posts/util';

@Injectable()
export class PostApi {
  constructor(
    private readonly firestore: Firestore,
    private readonly functions: Functions
  ) {}

  post$(id: string) {
    const docRef = doc(
      this.firestore,
      `posts/${id}`
    ).withConverter<IPost>({
      fromFirestore: (snapshot) => {
        return snapshot.data() as IPost;
      },
      toFirestore: (it: IPost) => it,
    });
    return docData(docRef, { idField: 'id' });
  }

  async createPost(request: ICreatePostRequest) {
    return await httpsCallable<ICreatePostRequest, IAddPostResponse>(
      this.functions,
      'createPost'
    )(request);
  }

  async updatePostTime(request: IUpdatePostTimeRequest) {
    return await httpsCallable<IUpdatePostTimeRequest, IUpdatePostTimeResponse>(
      this.functions,
      'updatePostTime'
    )(request);
  }

  async commentOnPost(request: ICommentPostRequest) {
    return await httpsCallable<ICommentPostRequest, ICommentPostResponse>(
      this.functions,
      'commentOnPost'
    )(request);
  }

  async likePost(request: ILikePostRequest) {
    return await httpsCallable<ILikePostRequest, ILikePostResponse>(
      this.functions,
      'likePost'
    )(request);
  }

  async deletePost(request: IDeletePostRequest) {
    return await httpsCallable<IDeletePostRequest, IDeletePostResponse>(
      this.functions,
      'deletePost'
    )(request);
  }

  async addComment(request: IAddCommentRequest) {
    return await httpsCallable<IAddCommentRequest,IAddCommentResponse>(
      this.functions,
      'addComment'
    )(request);
  }
}
