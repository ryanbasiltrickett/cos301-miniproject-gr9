import { INotification } from '../interfaces';

export class NotifyFriendActivityEvent {
  constructor(public readonly profile: INotification) {}
}
