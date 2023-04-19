import { Injectable } from '@angular/core';
import { collection, doc, docData, Firestore, query } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import { IProfile } from '@mp/api/profiles/util';
import { Timestamp } from 'firebase-admin/firestore';
import * as admin from 'firebase-admin';
import { IGetPost, IGetTrendingRequest, IGetTrendingResponse, IGetUser, IGetUserRequest, IGetUserResponse } from '@mp/api/browse/util';
import { IUser } from '@mp/api/users/util';
import { Subject } from 'rxjs';
// import {
//     IBrowse,
// } from '@mp/api/browse/util';


export interface IBrowse{
    created: Timestamp;
    customClaims: [] | null;
    displayName: string|null;
    email: string;
    id: string;
    phoneNumber: string | null;
    photoURL: string | null;

}


@Injectable()
export class BrowseApi {
  constructor(
    private readonly firestore: Firestore,
    private readonly functions: Functions
  ) {}

  browse$(id: string) {
    const docRef = doc(
      this.firestore,
      `users/${id}`
    ).withConverter<IProfile>({
      fromFirestore: (snapshot) => {
        console.log("Here");
        return snapshot.data() as IProfile;
      },
      toFirestore: (it: IProfile) => it,
    });
    console.log(docRef);
    return docData(docRef, { idField: 'id' });
  }

  async getUser(request: IGetUserRequest) {
    return await httpsCallable<
      IGetUserRequest,
      IUser[]
    >(
      this.functions,
      'getUser'
    )(request);
  }

  async getTrending(request: IGetTrendingRequest){
    return await httpsCallable<
    IGetTrendingRequest,
    IGetPost[]
    >(
      this.functions,
      'getTrending'
    )(request);
  }
}