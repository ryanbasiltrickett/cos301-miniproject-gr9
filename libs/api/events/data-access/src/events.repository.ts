import { Injectable, NotImplementedException } from '@nestjs/common';
import * as admin from 'firebase-admin';
// import { IGetPost, IGetUser, IGetUserResponse } from '@mp/api/browse/util';
import { IUser} from '@mp/api/users/util';
import { where } from '@firebase/firestore';
import { IEvent, IEventResponse } from '@mp/api/events/util';


@Injectable()
export class EventsRepository{
    async addEvent(event: IEventResponse, user: string ){
        if(await this.checkNumEvents(user) < 3){
            admin.firestore()
            .collection('events')
            .doc(user)
            .collection('active-events')
            .add(event.event[0]);      
            return true;      
        }else{
            return false;
        }

    }

    async getEvents(user: string){
        console.log('In repo');
        const db =  admin.firestore();
        const userEvents = await db.collection('events')
        .doc(user)
        .collection('active-events')
        .get();
        const eventData = userEvents.docs.map((doc) => doc.data() as IEvent);
        console.log(eventData);
        return eventData;
    }

    async checkNumEvents(user: string){
        const activeEvents = await admin.firestore()
        .collection('events')
        .doc(user)
        .collection('active-events')
        .get();

        return activeEvents.size;
    }
}