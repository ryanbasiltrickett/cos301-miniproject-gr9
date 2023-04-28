import { ProfilesRepository } from '@mp/api/profiles/data-access';
import { ProfileTimeUpdatedEvent } from '@mp/api/profiles/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(ProfileTimeUpdatedEvent)
export class ProfileTimeUpdatedHandler implements IEventHandler<ProfileTimeUpdatedEvent> {
  constructor(private readonly repository: ProfilesRepository) {}

  async handle(event: ProfileTimeUpdatedEvent) {
    console.log(`${ProfileTimeUpdatedHandler.name}`);
    await this.repository.updateProfile(event.profile);
  }
}