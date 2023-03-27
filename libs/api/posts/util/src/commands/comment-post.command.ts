import { ICommentPostRequest} from '../requests';

export class CommentPostCommand {
  constructor(public readonly request: ICommentPostRequest) {}
}