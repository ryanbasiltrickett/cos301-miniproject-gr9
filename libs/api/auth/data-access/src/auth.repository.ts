import { IAuth } from '@mp/api/auth/util';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class AuthRepository {
  async updateProfile(auth: IAuth) {
    await admin.auth().updateUser(auth.id, {
      displayName: auth.username,
      email: auth.email ? auth.email : undefined,
      photoURL: auth.photoURL,
      phoneNumber: auth.phoneNumber,
      password: auth.password ? auth.password : undefined,
    });
  }

  async createProfile(auth: IAuth){
    await admin.auth()
      .createUser({
        uid: auth.id,
        email:auth.email ? auth.email : undefined,
        displayName: auth.username,
        photoURL: auth.photoURL,
        phoneNumber: auth.phoneNumber,
        password: auth.password ? auth.password : undefined,
      });
  }

  async deleteProfile(auth: IAuth){
    await admin.auth().deleteUser(auth.id);
  }
}
