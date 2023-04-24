import { Timestamp } from "firebase-admin/firestore";
import { IuserPosts } from "./userPosts.interface";

export interface IFollowers {
    UserID: string;
    followers: string[];
    lastpost: Timestamp;
    recentPost: IuserPosts[];
}
