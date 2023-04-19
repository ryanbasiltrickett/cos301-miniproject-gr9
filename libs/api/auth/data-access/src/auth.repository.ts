import { IAuth } from '@mp/api/auth/util';
import { Injectable } from '@nestjs/common';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
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

  async sendPasswordReset(email: string){
    const auth = getAuth();

    await sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  }

  async confirmPasswordReset(code: string, email: string){
    await this.confirmPasswordReset(code, email);
  }
}
