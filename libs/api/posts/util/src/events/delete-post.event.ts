import { IDeletePost } from '../interfaces';

export class DeletePostEvent {
  constructor(public readonly post: IDeletePost) {}
}