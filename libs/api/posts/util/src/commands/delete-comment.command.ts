import { IDeleteCommentRequest } from '../requests';

export class DeleteCommentCommand {
  constructor(public readonly request: IDeleteCommentRequest) {}
}
