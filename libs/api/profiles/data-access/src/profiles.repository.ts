import { IProfile } from '@mp/api/profiles/util';
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
    return await admin.firestore()
    .collection('posts')
    .where('author', '==', user)
    .get();
  }
}
