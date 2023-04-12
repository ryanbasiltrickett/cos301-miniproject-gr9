export class DashboardEvent {
    static readonly type = '[Events] DashboardEvent';
    constructor(
      public readonly event: {
        eventTitle: string,
        eventTime: Date
      }
    ) {console.log("Created");}
}

export class MyTest{
  static readonly type = '[Test] MyTest';
}