import { INotification } from '../interfaces';

export class NotifyLowTimeEvent {
  constructor(public readonly profile: INotification) {}
}
