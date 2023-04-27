import { Module } from '@nestjs/common';
import { BrowseRepository } from './browse.repository';

@Module({
  providers: [BrowseRepository],
  exports: [BrowseRepository],
})
export class BrowseModule {}