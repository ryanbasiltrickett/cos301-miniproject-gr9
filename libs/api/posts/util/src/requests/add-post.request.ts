import { IPost } from '../interfaces';

export interface ICreatePostRequest {
  post: {
    poster: string;
    description: string;
    mediaUrl?: string;
  };
}
