import { IComment } from '../interfaces';

export interface ICommentPostRequest{
  postId?: string,
  comment: IComment;
}
