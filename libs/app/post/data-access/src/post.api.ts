import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import {
   IPost,
   IAddPostRequest,
   IAddPostResponse,
   ICommentPostRequest,
   ICommentPostResponse,
   IDeletePostRequest,
   IDeletePostResponse,
   ILikePostRequest,
   ILikePostResponse

} from '@mp/api/posts/util';1
import { NotImplementedException } from '@nestjs/common';

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

  async updateAddPost(request: IAddPostRequest) {
    return NotImplementedException;
  }

  async updateCommentPost(request: ICommentPostRequest) {
    return NotImplementedException;
  }

  async updateDeletePost(request: IDeletePostRequest) {
    return NotImplementedException;
  }

  async updateLikePost(request: ILikePostRequest) {
    return NotImplementedException;
  }
}
