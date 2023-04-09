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
} from '@mp/api/posts/util';

@Injectable()
export class PostApi {
  constructor(
    private readonly firestore: Firestore,
    private readonly functions: Functions
  ) {}

  // post$(id: string) {
  //   const docRef = doc(
  //     this.firestore,
  //     `posts/${id}`
  //   ).withConverter<Ipost>({
  //     fromFirestore: (snapshot) => {
  //       return snapshot.data() as Ipost;
  //     },
  //     toFirestore: (it: Ipost) => it,
  //   });
  //   return docData(docRef, { idField: 'id' });
  // }

  async updatePostTime(request: IUpdatePostTimeRequest) {
    return await httpsCallable<IUpdatePostTimeRequest, IUpdatePostTimeResponse>(
      this.functions,
      'updatePostTime'
    )(request);
  }

  async createPost(request: ICreatePostRequest) {
    return await httpsCallable<ICreatePostRequest, IAddPostResponse>(
      this.functions,
      'createPost'
    )(request);
  }
}
