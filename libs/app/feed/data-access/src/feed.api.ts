import { Injectable } from '@angular/core';
import { collection, doc, docData, Firestore } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import { getDocs } from '@firebase/firestore';
import { ILikePostRequest, IPost } from '@mp/api/posts/util';

@Injectable()
export class FeedApi {
  constructor(
    private readonly firestore: Firestore,
    private readonly functions: Functions
  ) {}

  //   feed$() {
  //     maybe have a collection/function that returns shows relevant information for a user
  //     const querySnapshot = getDocs(collection(this.firestore, 'feed'));
  //     // TODO convert to our onw object
  //     return docData(querySnapshot);
  //   }

  post$(id: string) {
    const docRef = doc(this.firestore, `posts/${id}`).withConverter<IPost>({
      fromFirestore: (snapshot) => {
        return snapshot.data() as IPost;
      },
      toFirestore: (it: IPost) => it,
    });
    return docData(docRef, { idField: 'id' });
  }

  async updatePostLikeCount(request: ILikePostRequest) {
    return await httpsCallable<ILikePostRequest, void>(
      this.functions,
      'updatePostLikeCount'
    )(request);
  }
}
