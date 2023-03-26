import { IEvent } from '../interfaces';

export class GenerateEventEvent {
  constructor(public readonly event: IEvent) {}
}