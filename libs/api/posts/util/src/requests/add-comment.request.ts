import { IPost } from '../interfaces';

export interface IAddCommentRequest{
  post: IPost|null;
  comment: string;
  userId: string;
}
