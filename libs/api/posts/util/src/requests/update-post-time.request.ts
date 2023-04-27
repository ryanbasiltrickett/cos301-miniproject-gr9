import { IProfile } from '@mp/api/profiles/util';
import { IPost } from '../interfaces';

export interface IUpdatePostTimeRequest {
  profile: IProfile;
  post: IPost;
}