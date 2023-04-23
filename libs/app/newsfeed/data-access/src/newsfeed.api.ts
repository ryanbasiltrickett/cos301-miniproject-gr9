import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import {
  INewsfeed,
  IgenNewsfeedRequest,
  IgenNewsfeedResponse

} from '@mp/api/newsfeed/util';
import { NotImplementedException } from '@nestjs/common';

@Injectable()
export class NewsfeedApi {
  constructor(
    private readonly firestore: Firestore,
    private readonly functions: Functions
  ) {}

  //Newsfeed$(id: string) {
    // const docRef = doc(
    //   this.firestore,
    //   `Newsfeeds/${id}`
    // ).withConverter<INewsfeed>({
    //   fromFirestore: (snapshot) => {
    //     return snapshot.data() as INewsfeed;
    //   },
    //   toFirestore: (it: INewsfeed) => it,
    // });
    // return docData(docRef, { idField: 'id' });
  //}

  async updateNewsfeedRequest(request: IgenNewsfeedRequest) {
    return NotImplementedException;
  }
}
