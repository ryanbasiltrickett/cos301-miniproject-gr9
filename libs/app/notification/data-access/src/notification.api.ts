import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
//create a notification object
/*import{
    sendNotificationRequest,
    sendNotificationResponse
    } from ''*/

@Injectable()
//send functionality specified on the system requirement
export class NotificationApi{
    constructor(
        private readonly firestore: Firestore,
        private readonly functions: Functions
      ) {}

    async sendNotfication(id: string){
        /*return await httpsCallable<
        sendNotificationRequest,
        sendNotificationResponse>(
            this.functions,
            'SendNotification'
        )(request);*/
    }

    async fetchNotification(id: string){

        /*const docRef = doc(
            this.firestore,
            `notifications/${id}`
          ).withConverter<IProfile>({
            fromFirestore: (snapshot) => {
              return snapshot.data() as IProfile;
            },
            toFirestore: (it: IProfile) => it,
          });
          return docData(docRef, { idField: 'id' });
        /*return await httpsCallable<
        sendNotificationRequest,
        sendNotificationResponse>(
            this.functions,
            'SendNotification'
        )(request);*/
    }

} 