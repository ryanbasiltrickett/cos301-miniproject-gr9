import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { INewsfeed } from '@mp/api/newsfeed/util'; //isnt it '@mp/api/newsfeed/util
//import { INewsfeed } from '../newsfeed/util/src'

@Injectable()
export class NewsfeedRepository {
  async createNewsfeed(newsfeed: INewsfeed) {
    return await admin
      .firestore()
      .collection('newsfeed')
      /*.doc(newsfeed.id)
      .create(user);*/
  }
}
