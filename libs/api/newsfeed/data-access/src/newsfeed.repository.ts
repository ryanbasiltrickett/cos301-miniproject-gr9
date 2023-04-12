import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { INewsfeed, IPost, IPostArray } from '@mp/api/newsfeed/util'; //isnt it '@mp/api/newsfeed/util
import { IUser } from '@mp/api/users/util';
import { IProfile } from '@mp/api/profiles/util';
import { IFollowers } from '@mp/api/newsfeed/util';
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

  async generatePosts(postID: string) {
    return await admin
      .firestore()
      .collection('posts')
      .withConverter<IPost>({
        fromFirestore: (snapshot) => {
          return snapshot.data() as IPost;
        },
        toFirestore: (it: IPost) => it,
      })
      .doc(postID)
      .get();
  }

  async getFollowers(userID: string) {
    return await admin
    .firestore()
    .collection('followers')
    .withConverter<IFollowers>({
      fromFirestore: (snapshot) => {
        return snapshot.data() as IFollowers;
      },
      toFirestore: (it: IFollowers) => it,
    })
    .doc(userID)
    .get();
  }

  async showNewsfeed(newsfeed: INewsfeed) {
    return await admin
    .firestore()
    .collection('followers')
    .doc() 
    .get(); 
  } 
}