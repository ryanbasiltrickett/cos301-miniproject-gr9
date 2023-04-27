import { IProfile } from '../interfaces';

export class ProfileTimeUpdatedEvent {
  constructor(public readonly profile: IProfile) {}
}
