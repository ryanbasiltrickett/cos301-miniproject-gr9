import { IPost } from '@mp/api/post/util';

export class Logout {
  static readonly type = '[Post] Logout';
}

export class SubscribeToPost {
  static readonly type = '[Post] SubscribeToPost';
}

export class SetPost {
  static readonly type = '[Post] SetPost';
  constructor(public readonly post: IPost | null) {}
}

export class UpdateAccountDetails {
  static readonly type = '[Post] UpdateAccountDetails';
}

export class UpdateFollow {
  static readonly type = '[Post] UpdateAddressDetails';
}

export class UpdateSaved {
  static readonly type = '[Post] UpdateSaved';
}

export class UpdateTime {
  static readonly type = '[Post] UpdateTime';
}

export class UpdateComment {
  static readonly type = '[Post] UpdateComment';
}