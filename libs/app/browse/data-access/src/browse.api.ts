import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import {
    IBrowse,
} from '@mp/api/browse/util';

@Injectable()
export class BrowseApi {
  constructor(
    private readonly firestore: Firestore,
    private readonly functions: Functions
  ) {}

  browse$(id: string) {
    const docRef = doc(
      this.firestore,
      `browse/${id}`
    ).withConverter<IBrowse>({
      fromFirestore: (snapshot) => {
        return snapshot.data() as IBrowse;
      },
      toFirestore: (it: IBrowse) => it,
    });
    return docData(docRef, { idField: 'id' });
  }
}