import { IGetPost } from '@mp/api/browse/util';
import { IGetUserPostResponse, IProfile } from '@mp/api/profiles/util';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class ProfilesRepository {
  async findOne(profile: IProfile) {
    return await admin
      .firestore()
      .collection('users')
      .withConverter<IProfile>({
        fromFirestore: (snapshot) => {
          return snapshot.data() as IProfile;
        },
        toFirestore: (it: IProfile) => it,
      })
      .doc(profile.id)
      .get();
  }

  async findOneById(profileID: string) {
    return await admin
      .firestore()
      .collection('users')
      .withConverter<IProfile>({
        fromFirestore: (snapshot) => {
          return snapshot.data() as IProfile;
        },
        toFirestore: (it: IProfile) => it,
      })
      .doc(profileID)
      .get();
  }

  async createProfile(profile: IProfile) {
    // Remove password field if present
    delete profile.password;
    return await admin
      .firestore()
      .collection('users')
      .doc(profile.id)
      .set(profile, { merge: true });
  }

  async updateProfile(profile: IProfile) {
    // Remove password field if present
    delete profile.password;
    return await admin
      .firestore()
      .collection('users')
      .doc(profile.id)
      .set(profile, { merge: true });
  }

  async getUserPosts(user: string){
    console.log(user);
    const data = await admin.firestore()
    .collection('posts')
    .where('author', '==', user)
    .limit(5)
    .get();

    const postData = data.docs.map((doc) => doc.data() as IGetPost);

    const response: IGetUserPostResponse = {posts : postData};
    
    return response;
  }
}
