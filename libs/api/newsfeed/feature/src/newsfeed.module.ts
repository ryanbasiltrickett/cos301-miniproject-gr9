import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { NewsfeedModule as NewsfeedModuleDA } from '@mp/api/newsfeed/data-access';
import { NewsfeedSagas } from './newsfeed.sagas';//for later
import { NewsfeedService } from './newsfeed.service';
import {
  genNewsfeedHandler,
  updateNFPostHandler
} from './commands'
import {
  genNFHandler,
  updateNFPHandler
} from './events'

export const CommandHandlers = [
  genNewsfeedHandler,
  updateNFPostHandler
];

export const EventHandlers = [
  genNFHandler,
  updateNFPHandler
];

@Module (
  {
    imports: [CqrsModule, NewsfeedModuleDA],
   providers: [NewsfeedService, ...CommandHandlers, ...EventHandlers],
   exports: [NewsfeedService],
  }
)

//for later
export class NewsfeedModule {}
