import { IComment, IPost } from '../interfaces';

export class CommentDeletedEvent {
  constructor(
    public readonly post: IPost,
    ) {}
}
