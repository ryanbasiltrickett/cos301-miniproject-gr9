import { IUser, UserCreatedEvent } from '@mp/api/users/util';
import { AggregateRoot } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';

export class User extends AggregateRoot implements IUser {
  constructor(
    public id: string,
    public email?: string | null | undefined,
    public username?: string | null | undefined,
    public bio?: string | null | undefined,
    public name?: string | null | undefined,
    public visibility?: boolean | null | undefined,
    public timeLeft?: number | null | undefined,
    public photoURL?: string | null | undefined,
    public phoneNumber?: string | null | undefined,
    public customClaims?: { [key: string]: any } | null | undefined,
    public created?: Timestamp | null | undefined
  ) {
    super();
  }

  static fromData(user: IUser): User {
    const instance = new User(
      user.id,
      user.email,
      user.username,
      user.bio,
      user.name,
      user.visibility,
      user.timeLeft,
      user.photoURL,
      user.phoneNumber,
      user.customClaims,
      user.created
    );
    return instance;
  }

  create() {
    this.apply(new UserCreatedEvent(this.toJSON()));
  }

  toJSON(): IUser {
    return {
      id: this.id,
      email: this.email,
      username: this.username,
      photoURL: this.photoURL,
      // phoneNumber: this.phoneNumber,
      // customClaims: this.customClaims,
      created: this.created,
      bio: this.bio,
      visibility: this.visibility,
      timeLeft: this.timeLeft,
      name: this.name,
    };
  }
}
