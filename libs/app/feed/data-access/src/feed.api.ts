import { Injectable } from '@angular/core';
import {
  collection,
  doc,
  docData,
  Firestore,
  onSnapshot,
  query,
} from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import { getDocs } from '@firebase/firestore';
import { ILikePostRequest, ILikePostResponse, IPost } from '@mp/api/posts/util';
import { Subject, Subscription } from 'rxjs';

@Injectable()
export class FeedApi {
  constructor(
    private readonly firestore: Firestore,
    private readonly functions: Functions
  ) {}

  feed$: Subject<IPost[]> = new Subject<IPost[]>();

  subscribeToFeed() {
    const postsSnapshot = query(collection(this.firestore, 'posts'));

    // maybe unsubscribe from this subscription
    const unsubscribe = onSnapshot(postsSnapshot, (snapshot) => {
      console.log('snapshot: ', snapshot);

      this.feed$.next(snapshot.docs.map((doc) => doc.data() as IPost));
    });
  }


  async updatePostLikeCount(request: ILikePostRequest) {
    return await httpsCallable<ILikePostRequest, ILikePostResponse>(
      this.functions,
      'updatePostLikeCount'
    )(request);
  }
}
