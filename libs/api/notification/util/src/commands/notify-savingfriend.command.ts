import { INotifySavingFriendRequest } from '../requests';

export class NotifySavingFriendCommand {
  constructor(public readonly request: INotifySavingFriendRequest) {}
}