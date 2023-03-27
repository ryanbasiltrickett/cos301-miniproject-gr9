import { IComment } from '../interfaces';

export class CommentPostEvent {
  constructor(public readonly post: IComment) {}
}