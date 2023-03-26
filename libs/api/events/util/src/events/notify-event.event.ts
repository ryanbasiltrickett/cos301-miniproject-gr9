import { IEvent } from '../interfaces';

export class NotifyEventEvent {
  constructor(public readonly event: IEvent) {}
}