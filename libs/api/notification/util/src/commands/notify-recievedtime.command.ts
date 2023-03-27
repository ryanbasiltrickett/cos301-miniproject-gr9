import { INotifyRecievedTimeRequest } from '../requests';

export class NotifyRecievedTimeCommand {
  constructor(public readonly request: INotifyRecievedTimeRequest) {}
}