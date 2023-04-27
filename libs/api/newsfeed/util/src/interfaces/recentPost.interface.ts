import { Timestamp } from 'firebase-admin/firestore';

export interface IRecentPost{
    postId: string;
    postDescription?: string | null | undefined;
    published: Timestamp;
    image?: string | null | undefined;
    location? : string | null | undefined;
}