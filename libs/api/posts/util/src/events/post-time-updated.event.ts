import { IPost } from '../interfaces';

export class PostTimeUpdatedEvent {
  constructor(public readonly post: IPost) {}
}
