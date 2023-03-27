import { NotificationService } from '@mp/api/notification/feature';
import {} from '@mp/api/notification/util';
import { NestFactory } from '@nestjs/core';
import * as functions from 'firebase-functions';
import { CoreModule } from '../core.module';

export const notifyEvent = functions.https.onCall(

);

export const notifySavingFriend = functions.https.onCall(

);

export const notifyLowTime = functions.https.onCall(

);

export const notifyFriendActivity = functions.https.onCall(

);

export const notifyRecievedTime = functions.https.onCall(

);