import { IPost } from '../interfaces';

export interface ICreatePostRequest {
  post: {
    userId: string | undefined;
    poster: string | null | undefined;
    description: string;
    mediaUrl?: string;
  };
}
