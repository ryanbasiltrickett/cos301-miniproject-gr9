export class DashboardEvent {
    static readonly type = '[Events] DashboardEvent';
    constructor(
      public readonly event: {
        eventTitle: string,
        eventTime: Date
      }
    ) {}
}

export class MyTest{
  static readonly type = '[Test] MyTest';
}