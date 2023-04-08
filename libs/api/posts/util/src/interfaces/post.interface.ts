import { Timestamp } from 'firebase-admin/firestore';
import { IComment } from './comment.interface';

export interface IPost{
    id : string;
    author : string;
    description? : string | null | undefined;
    likes : number;
    published : Timestamp;
    image? : string | null | undefined;
    location? : string | null | undefined;
    hashtags? : string[];
    comments? : IComment[];
}