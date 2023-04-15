import {IUser} from '@mp/api/users/util'
import { INFProfile } from '../interfaces';

export interface IgeneratePostRequest {
    profile: INFProfile | null,
}
