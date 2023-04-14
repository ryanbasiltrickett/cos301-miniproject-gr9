import { Timestamp } from "firebase-admin/firestore";

export interface IUserPosts {
    postDescription?: string;
    image?: string;
    postId: string;
    likes?: string;
    location?: string|null;
    published: Timestamp;
}
