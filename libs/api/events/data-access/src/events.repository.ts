import { Injectable, NotImplementedException } from '@nestjs/common';
import * as admin from 'firebase-admin';
// import { IGetPost, IGetUser, IGetUserResponse } from '@mp/api/browse/util';
import { IUser} from '@mp/api/users/util';
import { where } from '@firebase/firestore';
import { IEvent, IEventResponse } from '@mp/api/events/util';


@Injectable()
export class EventsRepository{
    async addEvent(event: IEventResponse, user: string ){
        if(await this.checkNumEvents(user) < 5){
            admin.firestore()
            .collection('events')
            .doc(user)
            .collection('active-events')
            .add(event);      
            return true;      
        }else{
            return false;
        }

    }

    async getEvents(user: string){
        console.log('In repo');
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