import { IPost } from '../interfaces';

export interface ICreatePostRequest {
  post: {
    poster: string | null | undefined;
    description: string;
    mediaUrl?: string;
  };
}
