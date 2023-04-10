import { Component } from '@angular/core';
import {} from '@mp/app/auth/data-access'
import { FormBuilder, Validators } from '@angular/forms';
import { Login } from '@mp/app/login/util';
import {
    ActionsExecuting,
    actionsExecuting
} from '@ngxs-labs/actions-executing';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthApi } from 'libs/app/auth/data-access/src/auth.api';

@Component({
  selector: 'ms-login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  
  @Select(actionsExecuting([Login])) busy$!: Observable<ActionsExecuting>;
  loginForm = this.fb.group({
    email: [
      '',
      [Validators.email, Validators.minLength(6), Validators.maxLength(64)],
    ],
    password: ['', [Validators.minLength(6), Validators.maxLength(64)]],
  });
  showPassword = false;

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get emailError(): string {
    if (this.email?.errors?.['email']) return 'Email is invalid';
    if (this.email?.errors?.['required']) return 'Email is required';
    if (this.email?.errors?.['minlength'])
      return 'Email should be longer than 6 characters';
    if (this.email?.errors?.['maxlength'])
      return 'Email should be shorter than 64 characters';

    return 'Email is invalid';
  }

  get passwordError(): string {
    if (this.password?.errors?.['required']) return 'Password is required';
    if (this.password?.errors?.['minlength'])
      return 'Password should be longer than 6 characters';
    if (this.password?.errors?.['maxlength'])
      return 'Password should be shorter than 64 characters';

    return 'Password is invalid';
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store,
    private auth : AuthApi
  ) {}

  login() {
    if (this.loginForm.valid) {
      this.store.dispatch(new Login());
    }
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  googleLogin() {
    this.auth.continueWithGoogle();
    console.log("Loggin with Google");
  }

  facebookLogin() {
    this.auth.continueWithFacebook();
    console.log("Loggin with Google");
  }

  appleLogin() {
    this.auth.continueWithApple();
    console.log("Loggin with Google");
  }

  twitterLogin() {
    this.auth.continueWithTwitter();
    console.log("Loggin with Google");
  }
}
