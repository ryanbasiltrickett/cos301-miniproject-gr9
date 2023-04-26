import { IAddCommentRequest } from '../requests';

export class AddCommentCommand {
  constructor(public readonly request: IAddCommentRequest) {}
}
