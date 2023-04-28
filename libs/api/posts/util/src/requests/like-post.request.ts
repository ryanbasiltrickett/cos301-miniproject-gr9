import { IProfile } from '@mp/api/profiles/util';
import { IPost } from '../interfaces';

export interface ILikePostRequest{
  profile: IProfile;
  post: IPost;
}
