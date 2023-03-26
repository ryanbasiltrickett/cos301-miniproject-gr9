import { EventsService } from '@mp/api/events/feature';
import { NestFactory } from '@nestjs/core';
import { IEventRequest, 
        IEventResponse} from '@mp/api/events/util';
import * as functions from 'firebase-functions';
import { CoreModule } from '../core.module';
import { NotImplementedException } from '@nestjs/common';
import { IEvent } from '@nestjs/cqrs';

export const generateEvent = functions.https.onCall(
    async (
      request: IEventRequest,
    ): (Promise<IEventResponse>) => {
      return request;
    }
  );

