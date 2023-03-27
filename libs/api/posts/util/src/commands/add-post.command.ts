import { IAddPostRequest } from '../requests';

export class AddPostCommand {
  constructor(public readonly request: IAddPostRequest) {}
}