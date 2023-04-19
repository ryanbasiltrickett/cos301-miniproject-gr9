import { Timestamp } from "firebase-admin/firestore";

export interface IGetPost{
    author: string;
    desciption: string;
    location: string;
    published: Timestamp;
    time: number;
}