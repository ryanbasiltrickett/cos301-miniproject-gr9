import { Timestamp } from "firebase-admin/firestore";

export interface IGetPost{
    author: string;
    description: string;
    location: string;
    published: Timestamp;
    time: number;
    photo: string;
}