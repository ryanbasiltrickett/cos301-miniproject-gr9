import { EventsService } from '@mp/api/events/feature';
import { NestFactory } from '@nestjs/core';
import { IEventRequest, 
        IEventResponse} from '@mp/api/events/util';
import * as functions from 'firebase-functions';
import { CoreModule } from '../core.module';

export const generateEvent = functions.https.onCall(
    async (
      request: IEventRequest,
    ): (Promise<IEventResponse>) => {
      console.log(request);
      const app = await NestFactory.createApplicationContext(CoreModule);
      const service = app.get(EventsService);
      return await service.notifyAboutEvent(request);
    }
);


