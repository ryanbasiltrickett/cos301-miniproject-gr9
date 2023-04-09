import { ICreatePostRequest as IAddPostRequest } from '../requests';

export class CreatePostCommand {
  constructor(public readonly request: IAddPostRequest) {}
}
