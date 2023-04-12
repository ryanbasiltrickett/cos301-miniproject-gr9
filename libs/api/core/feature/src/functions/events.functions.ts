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
      console.log('App initialized');
      const service = app.get(EventsService);
      console.log('Service initialized');
      return service.notifyAboutEvent(request);
    }
);

// export const notifyAboutEvent = functions.https.onCall(
//   async (data, context) => {
//     // Check if the request is coming from an authenticated user
//     if (!context.auth) {
//       throw new functions.https.HttpsError('unauthenticated', 'You must be logged in to call this function.');
//     }
//     const app = await NestFactory.createApplicationContext(CoreModule);
//     const service = app.get(EventsService);
//     return service.;
//   });


