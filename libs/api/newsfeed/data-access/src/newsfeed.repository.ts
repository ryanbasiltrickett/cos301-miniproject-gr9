import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { INewsfeed, IPostArray } from '@mp/api/newsfeed/util'; //isnt it '@mp/api/newsfeed/util
import { IUser } from '@mp/api/users/util';
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

  async generatePosts(userID: string) {
    return await admin
      .firestore()
      .collection('posts')
      .doc(userID)
      .get();
  }

  async getFollowers(user: IUser) {
    return await admin
    .firestore()
    .collection('followers')
    .doc(user.id)
    .get();
  }
}
