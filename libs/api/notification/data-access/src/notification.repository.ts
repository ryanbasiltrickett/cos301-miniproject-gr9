import { INotification } from '@mp/api/notification/util';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class NotificationRepository {
    async createNotification(notification: INotification){
        return await admin
        .firestore()
        .collection('notifications')
        .doc(notification.id)
        .create(notification);
    }
}