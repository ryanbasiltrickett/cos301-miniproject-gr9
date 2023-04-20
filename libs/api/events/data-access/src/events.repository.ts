import { Injectable, NotImplementedException } from '@nestjs/common';
import * as admin from 'firebase-admin';
// import { IGetPost, IGetUser, IGetUserResponse } from '@mp/api/browse/util';
import { IUser} from '@mp/api/users/util';
import { where } from '@firebase/firestore';
import { IEvent, IEventResponse } from '@mp/api/events/util';


@Injectable()
export class EventsRepository{
    async addEvent(event: IEventResponse, user: string ){
        console.log("In repo");
        console.log(event.event.eventTitle);
    }

    async getEvents(user: string){
        console.log('In repo');
    }
}