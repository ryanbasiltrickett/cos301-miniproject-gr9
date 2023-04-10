import { IUser } from '@mp/api/users/util';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class UsersRepository {
  async createUser(user: IUser) {
    return await admin
      .firestore()
      .collection('users')
      .doc(user.id)
      .create(user);
  }

  async updateUser(user: IUser){
    return await admin
      .firestore()
      .collection('users')
      .doc(user.id)
      .set(user, {merge: true})
  }

  async getUser(user: IUser){
    return await admin
      .firestore()
      .collection('users')
      .doc(user.id)
      .get();
  }
}
