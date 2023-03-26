import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { NewsfeedSagas } from './newsfeed.sagas';//for later
import { NewsfeedService } from './newsfeed.service';

//for later
export class NewsfeedModule {}
