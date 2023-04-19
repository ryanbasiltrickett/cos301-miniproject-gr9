import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Logout, UpdateAccountDetails } from '@mp/app/profile/util';
import {
    ActionsExecuting,
    actionsExecuting
} from '@ngxs-labs/actions-executing';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ms-profile-account-details-component',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;
  @Select(actionsExecuting([UpdateAccountDetails]))
  busy$!: Observable<ActionsExecuting>;
  accountDetailsForm = this.fb.group({
    username: ['', [Validators.minLength(6), Validators.maxLength(64)]],
    email: ['', [Validators.minLength(6), Validators.maxLength(64)]],
    password: ['', [Validators.minLength(6), Validators.maxLength(64)]],
  });
  showPassword = false;

  get username() {
    return this.accountDetailsForm.get('username');
  }

  get bio() {
    return this.accountDetailsForm.get('bio');
  }

  get name() {
    return this.accountDetailsForm.get('name');
  }

  get email() {
    return this.accountDetailsForm.get('email');
  }

  get password() {
    return this.accountDetailsForm.get('password');
  }

  get usernameError(): string {
    if (this.username?.errors?.['required'])
      return 'Display name is required';
    if (this.username?.errors?.['minlength'])
      return 'Display name should be longer than 6 characters';
    if (this.username?.errors?.['maxlength'])
      return 'Display name should be shorter than 64 characters';

    return 'Display name is invalid';
  }

  get emailError(): string {
    if (this.email?.errors?.['required']) return 'Email is required';
    if (this.email?.errors?.['email']) return 'Email is invalid';
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
    private readonly store: Store
  ) {}

  logout() {
    this.store.dispatch(new Logout());
  }

  updateAccountDetails() {
    this.store.dispatch(new UpdateAccountDetails());
  }
}
