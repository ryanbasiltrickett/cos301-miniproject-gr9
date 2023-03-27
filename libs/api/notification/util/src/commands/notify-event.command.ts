import { INotifyEventRequest } from '../requests';

export class NotifyEventCommand {
  constructor(public readonly request: INotifyEventRequest) {}
}