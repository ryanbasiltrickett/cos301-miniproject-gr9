import { ProfilesModule as ProfilesDataAccessModule } from '@mp/api/profiles/data-access';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import {
    CreateProfileHandler,
    UpdateAccountDetailsHandler,
    UpdateAddressDetailsHandler,
    UpdateContactDetailsHandler,
    UpdateOccupationDetailsHandler,
    UpdatePersonalDetailsHandler,
    UpdateProfileStatusHandler,
    GetUserPostsHandler
} from './commands';
import {
    AccountDetailsUpdatedHandler,
    AddressDetailsUpdatedHandler,
    ContactDetailsUpdatedHandler,
    OccupationDetailsUpdatedHandler,
    PersonalDetailsUpdatedHandler,
    ProfileCreatedHandler,
    ProfileStatusUpdatedHandler,
    ProfileTimeUpdatedHandler
} from './events';
import { ProfilesSagas } from './profiles.sagas';
import { ProfilesService } from './profiles.service';

export const CommandHandlers = [
  CreateProfileHandler,
  UpdateContactDetailsHandler,
  UpdateAddressDetailsHandler,
  UpdatePersonalDetailsHandler,
  UpdateOccupationDetailsHandler,
  UpdateAccountDetailsHandler,
  UpdateProfileStatusHandler,
  GetUserPostsHandler,
];
export const EventHandlers = [
  ProfileCreatedHandler,
  ContactDetailsUpdatedHandler,
  AddressDetailsUpdatedHandler,
  PersonalDetailsUpdatedHandler,
  OccupationDetailsUpdatedHandler,
  AccountDetailsUpdatedHandler,
  ProfileStatusUpdatedHandler,
  ProfileTimeUpdatedHandler,
];

@Module({
  imports: [CqrsModule, ProfilesDataAccessModule],
  providers: [
    ProfilesService,
    ...CommandHandlers,
    ...EventHandlers,
    ProfilesSagas,
  ],
  exports: [ProfilesService],
})
export class ProfilesModule {}
