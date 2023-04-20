import { Timestamp } from "firebase-admin/firestore";

export interface IEvent{
    eventTitle: string;
    eventTime: string;
    user: string ;
    date: Date;
}