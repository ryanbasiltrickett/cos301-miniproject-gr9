import { Timestamp } from "firebase-admin/firestore";

export interface IGetPost{
    author: string;
    desciption: string;
    time: number;
    location: string;
    published: Timestamp;
}