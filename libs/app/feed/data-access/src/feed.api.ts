import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
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

@Injectable()
export class FeedApi {
  constructor(
    private readonly firestore: Firestore,
    private readonly functions: Functions
  ) {}

  profile$(id: string) {
    const docRef = doc(
      this.firestore,
      `profiles/${id}`
    ).withConverter<IProfile>({
      fromFirestore: (snapshot) => {
        return snapshot.data() as IProfile;
      },
      toFirestore: (it: IProfile) => it,
    });
    return docData(docRef, { idField: 'id' });
  }


  async generatePost(request: IgeneratePostRequest) {
    return await httpsCallable<
      IgeneratePostRequest,
      IgeneratePostResponse
    >(
      this.functions,
      'generatePost'
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
