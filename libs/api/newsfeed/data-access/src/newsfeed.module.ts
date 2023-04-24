import { Module } from '@nestjs/common';
import { NewsfeedRepository } from './newsfeed.repository';

@Module({
  providers: [NewsfeedRepository],
  exports: [NewsfeedRepository],
})
export class NewsfeedModule {}
