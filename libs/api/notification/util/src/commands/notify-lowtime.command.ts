import { INotifyLowTimeRequest } from '../requests';

export class NotifyLowTimeCommand {
  constructor(public readonly request: INotifyLowTimeRequest) {}
}