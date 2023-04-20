export class DashboardEvent {
    static readonly type = '[Event] DashboardEvent';
    constructor(
      public readonly event: {
        user: string
      }
    ) {console.log("Created");}
}