import { Injectable } from '@angular/core';
import {
  collection,
  DocumentData,
  Firestore,
  onSnapshot,
  orderBy,
  query,
} from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import { IgeneratePostRequest, IgeneratePostResponse } from '@mp/api/newsfeed/util';
import {
  ICommentPostRequest,
  ICommentPostResponse,
  ILikePostRequest,
  ILikePostResponse,
  IPost,
  IUpdatePostTimeRequest,
  IUpdatePostTimeResponse,
} from '@mp/api/posts/util';
import { Subject } from 'rxjs';

@Injectable()
export class FeedApi {
  constructor(
    private readonly firestore: Firestore,
    private readonly functions: Functions
  ) {}

  feed$: Subject<IPost[]> = new Subject<IPost[]>();

  subscribeToFeed() {
    // Change this such that each post is individually subscribed to

    const postsSnapshot = query(collection(this.firestore, 'posts'),orderBy('published','desc'));


    // maybe unsubscribe from this subscription
    const unsubscribe = onSnapshot(postsSnapshot, (snapshot) => {
      this.feed$.next(
        snapshot.docs.map((doc) => {
          const post = doc.data();
          const data = {
            id: doc.id,
            ...post,
          };
          return data as IPost;
        })
      );
    });
  }

  async updatePostLikeCount(request: ILikePostRequest) {
    return await httpsCallable<ILikePostRequest, ILikePostResponse>(
      this.functions,
      'updatePostLikes'
    )(request);
  }

  async updatePostTime(request: IUpdatePostTimeRequest) {
    return await httpsCallable<IUpdatePostTimeRequest, IUpdatePostTimeResponse>(
      this.functions,
      'updatePostTime'
    )(request);
  }

  async updateComments(request: ICommentPostRequest) {
    return await httpsCallable<ICommentPostRequest, ICommentPostResponse>(
      this.functions,
      'updateComments'
    )(request);
  }

  // generatePost(request: IgeneratePostRequest) {
  //   return httpsCallable<IgeneratePostRequest, IgeneratePostResponse>(
  //     this.functions,
  //     'generatePost'
  //   )(request);
  // }
}
