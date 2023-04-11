export class GenerateEvent {
    static readonly type = '[Generate] GenerateEvent';
    constructor(
      public readonly event: {
        title: string,
        time: Date
      }
    ) {}
  }