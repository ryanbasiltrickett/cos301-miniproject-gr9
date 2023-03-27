import { INotification } from '../interfaces';

export class NotifyRecievedTimeEvent {
  constructor(public readonly notification: INotification) {}
}
