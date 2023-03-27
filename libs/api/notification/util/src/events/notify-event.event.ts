import { INotification } from '../interfaces';

export class NotifyEventEvent {
  constructor(public readonly profile: INotification) {}
}
