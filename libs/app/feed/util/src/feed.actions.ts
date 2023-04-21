import { IPost } from '@mp/api/posts/util';

export class LikePost {
  static readonly type = '[Feed] LikePost';
  constructor(public readonly post: IPost) {}
}

export class SetFeed {
  static readonly type = '[Feed] SetFeed';
  constructor(public readonly feed: IPost[]) {}
}

export class SubscribeToFeed {
  static readonly type = '[Feed] SubscribeToFeed';
}

export class GivePostTime {
  static readonly type = '[Feed] GivePostTime';
  constructor(public readonly post: IPost) {}
}