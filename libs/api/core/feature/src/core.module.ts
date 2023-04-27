import { AuthModule } from '@mp/api/auth/feature';
import { EventstoreModule } from '@mp/api/eventstore/feature';
import { NewsfeedModule } from '@mp/api/newsfeed/feature';
import { PostsModule } from '@mp/api/posts/feature';
import { ProfilesModule } from '@mp/api/profiles/feature';
import { UsersModule } from '@mp/api/users/feature';
import { Module } from '@nestjs/common';
import { BrowseModule} from '@mp/api/browse/feature';

@Module({
  imports: [
    AuthModule,
    EventstoreModule,
    ProfilesModule,
    UsersModule,
    PostsModule,
    NewsfeedModule,
    BrowseModule
  ],
})
export class CoreModule {}
