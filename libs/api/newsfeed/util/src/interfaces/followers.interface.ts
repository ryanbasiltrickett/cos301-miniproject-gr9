import { Timestamp } from "firebase-admin/firestore";
import { IRecentPost} from "./recentPost.interface";

export interface IFollowers {
    followers: string[];
    lastPost: Timestamp;
    recentPosts: IRecentPost[];
}
