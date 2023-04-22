import { IComment, ICommentPostRequest, IPost } from '@mp/api/posts/util';
import {IUser} from '@mp/api/users/util'
import {IPost as IPostUtil} from '@mp/api/newsfeed/util'

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

export class generatePost {
  static readonly type = '[Newsfeed] generatePost';
}

export class setPage {
  static readonly type = '[Newsfeed] setPage'
  constructor(public readonly posts: IPostUtil[] |undefined| null) {}
}

export class CommentPost {
  static readonly type = '[Feed] commetPost'
  constructor (public readonly request: ICommentPostRequest) {}
}
