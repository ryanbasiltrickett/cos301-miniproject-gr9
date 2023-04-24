import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { INewsfeed, IPost, IRecentPost } from '@mp/api/newsfeed/util'; //isnt it '@mp/api/newsfeed/util
import { IUser } from '@mp/api/users/util';
import { INFProfile } from '@mp/api/newsfeed/util';
import { IFollowers } from '@mp/api/newsfeed/util';

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

  async getFollowers(user: INFProfile) {
    return await admin
    .firestore()
    .collection('followers')
    .doc(user.userId)
    .get();
  }

  async getNewsfeed(user: INFProfile,limit: number) { //will return a sorted array (IRecentPost) of the recentPosts of all the people you follow
    const db = admin.firestore();
    const followed = await db.collection('followers')
    .where('followers', 'array-contains', user.userId)
    .orderBy('lastPost', 'desc')
    .limit(limit)
    .get();

    const data = followed.docs.map((doc) => doc.data() as IFollowers);
    const posts = data.reduce<IRecentPost[]>((acc, curr) => acc.concat(curr.recentPosts), []);
    const sortedPosts = posts.sort((a, b) => b.published.toMillis() - a.published.toMillis());
    return sortedPosts;
  }

  async getGlobalFeed(limit: number) {
    const db = admin.firestore();
    const posts = await db.collection('posts')
    .orderBy('published', 'desc')
    .limit(limit)
    .get();
    return posts.docs.map((doc) => doc.data() as IPost);
  }
}
