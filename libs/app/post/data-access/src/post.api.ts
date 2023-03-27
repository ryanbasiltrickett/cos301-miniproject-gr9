import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import {
    Ipost,
    IUpdateAccountDetailsRequest,
    IUpdateAccountDetailsResponse,
    IUpdateAddressDetailsRequest,
    IUpdateAddressDetailsResponse,
    IUpdateContactDetailsRequest,
    IUpdateContactDetailsResponse,
    IUpdateOccupationDetailsRequest,
    IUpdateOccupationDetailsResponse,
    IUpdatePersonalDetailsRequest,
    IUpdatePersonalDetailsResponse
} from '@mp/api/posts/util';import { NotImplementedException } from '@nestjs/common';
1

@Injectable()
export class postsApi {
  constructor(
    private readonly firestore: Firestore,
    private readonly functions: Functions
  ) {}

  post$(id: string) {
    const docRef = doc(
      this.firestore,
      `posts/${id}`
    ).withConverter<Ipost>({
      fromFirestore: (snapshot) => {
        return snapshot.data() as Ipost;
      },
      toFirestore: (it: Ipost) => it,
    });
    return docData(docRef, { idField: 'id' });
  }

  async incrementLikes(request: IUpdateAccountDetailsRequest) {
    return NotImplementedException;
  }

  async decrementLikes(request: IUpdateContactDetailsRequest) {
    return NotImplementedException;
  }

  async setTime(request: IUpdateAddressDetailsRequest) {
    return NotImplementedException;
  }

  async getLikes(request: IUpdatePersonalDetailsRequest) {
    return NotImplementedException;
  }

  async getTime(request: IUpdateOccupationDetailsRequest) {
    return NotImplementedException;
  }

  async setComment(request: IUpdateOccupationDetailsRequest) {
    return NotImplementedException;
  }

  async getComment(request: IUpdateOccupationDetailsRequest) {
    return NotImplementedException;
  }

  async incrementComment(request: IUpdateAccountDetailsRequest) {
    return NotImplementedException;
  }

  async decrementComment(request: IUpdateContactDetailsRequest) {
    return NotImplementedException;
  }

  async setComment(request: IUpdateAddressDetailsRequest) {
    return NotImplementedException;
  }

  async sharePost() {
    return NotImplementedException;
  }

}
