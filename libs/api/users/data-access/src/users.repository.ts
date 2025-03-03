import { IUser } from '@mp/api/users/util';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class UsersRepository {
  async createUser(user: IUser) {
    delete user.password;
    return await admin
      .firestore()
      .collection('users')
      .doc(user.id)
      .set(user, { merge: true });
  }
}
