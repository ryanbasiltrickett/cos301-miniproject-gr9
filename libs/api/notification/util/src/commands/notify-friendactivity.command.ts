import { INotifyFriendActivityRequest } from '../requests';

export class NotifyFriendActivityCommand {
  constructor(public readonly request: INotifyFriendActivityRequest) {}
}