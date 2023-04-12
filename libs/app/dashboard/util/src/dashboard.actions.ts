export class DashboardEvent {
    static readonly type = '[Event] DashboardEvent';
    constructor(
      public readonly event: {
        eventTitle: string,
        eventTime: Date
      }
    ) {console.log("Created");}
}