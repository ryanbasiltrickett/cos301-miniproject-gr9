import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import {
    IEvent
} from '@mp/api/events/util';
import { NotImplementedException } from '@nestjs/common';

@Injectable()
export class PostApi {
  constructor(
    private readonly firestore: Firestore,
    private readonly functions: Functions
  ) {}

  events$(id: string) {
    const docRef = doc(
        this.firestore,
        `events/${id}`
    ).withConverter<IEvent>({
        fromFirestore: (snapshot) => {
            return snapshot.data() as IEvent;
        },
      toFirestore: (it: IEvent) => it,
    });
    return docData(docRef, { idField: 'id' });
  }
}
