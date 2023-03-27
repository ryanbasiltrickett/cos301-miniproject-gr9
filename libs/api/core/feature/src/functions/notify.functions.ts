import { NotificationService } from '@mp/api/notification/feature';
import {
    INotifyEventRequest,
    INotifyEventResponse,
    INotifySavingFriendRequest,
    INotifySavingFriendResponse,
    INotifyLowTimeRequest,
    INotifyLowTimeResponse,
    INotifyFriendActivityRequest,
    INotifyFriendActivityResponse,
    INotifyRecievedTimeRequest,
    INotifyRecievedTimeResponse
} from '@mp/api/notification/util';
import { NestFactory } from '@nestjs/core';
import * as functions from 'firebase-functions';
import { CoreModule } from '../core.module';

export const notifyEvent = functions.https.onCall(
    async (
        request: INotifyEventRequest
      ): Promise<INotifyEventResponse> => {
        const app = await NestFactory.createApplicationContext(CoreModule);
        const service = app.get(NotificationService);
        return service.notifyEvent(request);
      }
);

export const notifySavingFriend = functions.https.onCall(
    async (
        request: INotifySavingFriendRequest
      ): Promise<INotifySavingFriendResponse> => {
        const app = await NestFactory.createApplicationContext(CoreModule);
        const service = app.get(NotificationService);
        return service.notifySavingFriend(request);
      }
);

export const notifyLowTime = functions.https.onCall(
    async (
        request: INotifyLowTimeRequest
      ): Promise<INotifyLowTimeResponse> => {
        const app = await NestFactory.createApplicationContext(CoreModule);
        const service = app.get(NotificationService);
        return service.notifyLowTime(request);
      }
);

export const notifyFriendActivity = functions.https.onCall(
    async (
        request: INotifyFriendActivityRequest
      ): Promise<INotifyFriendActivityResponse> => {
        const app = await NestFactory.createApplicationContext(CoreModule);
        const service = app.get(NotificationService);
        return service.notifyFriendActivity(request);
      }
);

export const notifyRecievedTime = functions.https.onCall(
    async (
        request: INotifyRecievedTimeRequest
      ): Promise<INotifyRecievedTimeResponse> => {
        const app = await NestFactory.createApplicationContext(CoreModule);
        const service = app.get(NotificationService);
        return service.notifyRecievedTime(request);
      }
);