import { IEventRequest } from '../requests';

export class GenerateEventCommand {
  constructor(public readonly request: IEventRequest) {}
}