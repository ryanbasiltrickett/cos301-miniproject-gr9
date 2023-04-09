import { AuthModule } from '@mp/api/auth/feature';
import { EventstoreModule } from '@mp/api/eventstore/feature';
import { PostsModule } from '@mp/api/posts/feature';
import { ProfilesModule } from '@mp/api/profiles/feature';
import { UsersModule } from '@mp/api/users/feature';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    AuthModule,
    EventstoreModule,
    ProfilesModule,
    UsersModule,
    PostsModule,
  ],
})
export class CoreModule {}
