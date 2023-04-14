import { Timestamp } from "firebase-admin/firestore";
import { IUserPosts } from "./userPosts.interface";

export interface IFollowers {
    followers: string[];
    lastPost: Timestamp;
    recentPosts: IUserPosts[];
}
