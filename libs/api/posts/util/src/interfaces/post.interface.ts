import { Timestamp } from 'firebase-admin/firestore';

export interface IPost{
    id : string;
    description? : string | null | undefined;
    likes : number;
    published : Timestamp;
    // image? : string | null | undefined;
}