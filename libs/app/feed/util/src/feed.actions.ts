import { IPost } from '@mp/api/posts/util';

export class LikePost {
  static readonly type = '[Feed] LikePost';
  constructor(public readonly post: IPost) {}
}
