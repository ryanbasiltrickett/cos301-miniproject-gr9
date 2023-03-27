import { ILike } from '../interfaces';

export class LikePostEvent {
  constructor(public readonly post: ILike) {}
}