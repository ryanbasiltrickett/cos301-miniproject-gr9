import { IEventRequest } from '../requests';

export class NotifyEventCommand {
  constructor(public readonly request: IEventRequest) {}
}