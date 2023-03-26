import { ILikeRequest } from '../requests';

export class LikePostCommand {
  constructor(public readonly request: ILikeRequest) {}
}