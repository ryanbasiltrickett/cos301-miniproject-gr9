export class GenerateEvent {
    static readonly type = '[Generate] GenerateEvent';
    constructor(
      public readonly event: {
        eventTitle: string,
        eventTime: Date
      }
    ) {}
}