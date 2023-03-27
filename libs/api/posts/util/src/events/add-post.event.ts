import { IPost } from '../interfaces';

export class AddPostEvent {
  constructor(public readonly post: IPost) {}
}
