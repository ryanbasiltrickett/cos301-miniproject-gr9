import { IPost } from '../interfaces';

export class NewPostEvent {
  constructor(public readonly post: IPost) {}
}
