import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { NewsfeedModule as NewsfeedModuleDA } from '@mp/api/newsfeed/data-access';
import { BrowseService } from './browse.service';

import {
  GetUserHandler
} from './queries'


export const QueryHandlers = [
    GetUserHandler
];

@Module (
  {
    imports: [CqrsModule, NewsfeedModuleDA],
   providers: [BrowseService, ...QueryHandlers],
   exports: [BrowseService],
  }
)

export class NewsfeedModule {}