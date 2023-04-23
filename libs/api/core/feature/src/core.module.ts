import { AuthModule } from '@mp/api/auth/feature';
import { EventstoreModule } from '@mp/api/eventstore/feature';
import { NewsfeedModule } from '@mp/api/newsfeed/feature';
import { PostsModule } from '@mp/api/posts/feature';
import { ProfilesModule } from '@mp/api/profiles/feature';
import { UsersModule } from '@mp/api/users/feature';
import { EventsModule } from '@mp/api/events/feature';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    AuthModule,
    EventstoreModule,
    ProfilesModule,
    UsersModule,
    PostsModule,
    NewsfeedModule,
    EventsModule
  ],
})
export class CoreModule {}
