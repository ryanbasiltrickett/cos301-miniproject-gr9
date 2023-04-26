import { IComment, IPost } from '../interfaces';

export class CommentAddedEvent {
  constructor(
    public readonly post: IPost
    ) {}
}
