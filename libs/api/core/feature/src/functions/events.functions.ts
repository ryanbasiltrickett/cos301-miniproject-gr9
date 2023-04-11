import { EventsService } from '@mp/api/events/feature';
import { NestFactory } from '@nestjs/core';
import { IEventRequest, 
        IEventResponse} from '@mp/api/events/util';
import * as functions from 'firebase-functions';
import { CoreModule } from '../core.module';
import { NotImplementedException } from '@nestjs/common';
import { IEvent } from '@nestjs/cqrs';
import * as admin from 'firebase-admin';
import cors from 'cors';

export const generateEvent = functions.https.onCall(
    async (
      request: IEventRequest,
    ): (Promise<IEventResponse>) => {
      const title = request.event.eventTitle;
      const time = request.event.eventTime;

      const notification: admin.messaging.Notification = {
        title: title,
        body: "The event will happen at: " + time,
      }
      
      const payload: admin.messaging.Message = {
        notification,
        topic: "Events"
      }
      admin.messaging().send(payload);
      return request;
    }
);

export const notifyAboutEvent = functions.https.onCall(
    async (
      request: IEventRequest,
    ): (Promise<IEventResponse>) => {
      return request;
    }
);

