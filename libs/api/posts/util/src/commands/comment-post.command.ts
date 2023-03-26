import { ICommentRequest} from '../requests';

export class CommentPostCommand {
  constructor(public readonly request: ICommentRequest) {}
}