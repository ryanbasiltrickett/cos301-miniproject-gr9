import { IPostRequest } from '../requests';

export class AddPostCommand {
  constructor(public readonly request: IPostRequest) {}
}