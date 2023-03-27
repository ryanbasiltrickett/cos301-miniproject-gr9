import { INotification } from '../interfaces';

export class NotifyEventEvent {
  constructor(public readonly notification: INotification) {}
}
