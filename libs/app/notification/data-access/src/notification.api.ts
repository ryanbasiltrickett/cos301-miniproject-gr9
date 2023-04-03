import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import{
    ITags,
    INotification,
    INotifyEventRequest,
    INotifyFriendActivityRequest,
    INotifyLowTimeRequest,
    INotifyRecievedTimeRequest,
    INotifySavingFriendRequest,
    INotifyEventResponse,
    INotifyFriendActivityResponse,
    INotifyLowTimeResponse,
    INotifyRecievedTimeResponse,
    INotifySavingFriendResponse
    } from '@mp/api/2notification/util';

@Injectable()
//send functionality specified on the system requirement
export class NotificationApi{
    
  constructor(
      private readonly firestore: Firestore,
      private readonly functions: Functions
    ) {}

  notification$(userId: ITags){
    const docRef = doc(
      this.firestore,
      `notification/${userId}`
    ).withConverter<INotification>({
      fromFirestore: (snapshot) => {
        return snapshot.data() as INotification;
      },
      toFirestore: (it: INotification) => it,
    });
    return docData(docRef, { idField: 'id' });
  } 
   
  async notifyEvent(request:INotifyEventRequest){
    return await httpsCallable<
      INotifyEventRequest,
      INotifyEventResponse
    >(
      this.functions,
      'notifyEvent'
    )(request);
  }
  async notifyFriendActivity(request : INotifyFriendActivityRequest){
    return await httpsCallable<
      INotifyFriendActivityRequest,
      INotifyFriendActivityResponse
    >(
      this.functions,
      'notifyFriendActivity'
    )(request);
  }
  async notifyLowTime(request : INotifyLowTimeRequest){
    return await httpsCallable<
      INotifyLowTimeRequest,
      INotifyLowTimeResponse
      >(
        this.functions,
        'notifyLowTime'
      )(request);
  }
  async notifySavingFriend(request : INotifySavingFriendRequest){
    return await httpsCallable<
      INotifySavingFriendRequest,
      INotifySavingFriendResponse
      >(
        this.functions,
        'notifySavingFriend'
      )(request);
  }
  async notifyRecievedTime(request :  INotifyRecievedTimeRequest){
    return await httpsCallable<
    INotifyRecievedTimeRequest,
    INotifyRecievedTimeResponse
    >(
      this.functions,
      'notifyRecievedTime'
    )(request);
  }
} 