import { IComment, IPost } from '../interfaces';

export interface IDeleteCommentRequest{
  post: IPost|null;
  index: number;
}
