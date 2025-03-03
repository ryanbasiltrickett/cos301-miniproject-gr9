import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  TwitterAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
  sendPasswordResetEmail,
} from '@angular/fire/auth';
import { signOut } from '@firebase/auth';

@Injectable()
export class AuthApi {
  constructor(private readonly auth: Auth) {}

  auth$() {
    return authState(this.auth);
  }

  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async register(email: string, password: string) {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async continueWithGoogle() {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(this.auth, provider);
  }

  async continueWithFacebook() {
    const provider = new FacebookAuthProvider();
    return await signInWithPopup(this.auth, provider);
  }

  async continueWithTwitter() {
    const provider = new TwitterAuthProvider();
    return await signInWithPopup(this.auth, provider);
  }

  async continueWithApple() {
    const provider = new OAuthProvider('apple.com');
    return await signInWithPopup(this.auth, provider);
  }

  async forgotPasssword(email: string): Promise<void> {
    return await sendPasswordResetEmail(this.auth, email);
  }

  async logout() {
    return await signOut(this.auth);
  }
}
