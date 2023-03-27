import { INotification } from '../interfaces';

export class NotifySavingFriendEvent {
  constructor(public readonly notification: INotification) {}
}
