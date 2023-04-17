import { IPost } from '../interfaces';

export interface IAddCommentRequest{
  post: IPost;
  comment: string;
  userId: string;
}
