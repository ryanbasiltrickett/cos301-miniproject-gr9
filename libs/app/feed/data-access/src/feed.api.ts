import { Injectable } from '@angular/core';
import {
  collection,
  Firestore,
  onSnapshot,
  query,
} from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import {
    IPost,
    IgenNewsfeedRequest,
    IgenNewsfeedResponse,
    IgeneratePostRequest,
    IgeneratePostResponse,
    IupdateNFPostRequest,
    IupdateNFPostResponse
} from '@mp/api/newsfeed/util'
import {
    IUser
} from '@mp/api/users/util'
import {
    IProfile
} from '@mp/api/profiles/util'

import {  
  ICommentPostRequest,
  ICommentPostResponse,
  ILikePostRequest,
  ILikePostResponse,
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
    const postsSnapshot = query(collection(this.firestore, 'posts'));

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

  async generateNewsFeed(request: IgenNewsfeedRequest){
    return await httpsCallable<
      IgenNewsfeedRequest,
      IgenNewsfeedResponse
    >(
      this.functions,
      'generateNewsFeed'
    )(request);
  }

  async updateNewsFeedPost(request: IupdateNFPostRequest){
    return httpsCallable<
      IupdateNFPostRequest,
      IupdateNFPostResponse
    >(
      this.functions,
      'updateNewFeedPost'
    )(request);
  }
}
