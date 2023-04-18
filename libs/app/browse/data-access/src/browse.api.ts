import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import { IProfile } from '@mp/api/profiles/util';
import { Timestamp } from 'firebase-admin/firestore';
import * as admin from 'firebase-admin';
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


 
}