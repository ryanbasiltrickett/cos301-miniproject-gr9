import { IPost } from '../interfaces';

export class PostLikedEvent {
  constructor(public readonly post: IPost) {}
}
