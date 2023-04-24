export class DashboardEvent {
    static readonly type = '[Event] DashboardEvent';
    constructor(
      public readonly event: {
        user: string
      }
    ) {console.log("Created");}
}

export class GetEvents{
  static readonly type = '[Event] GetEvents';
  constructor(
    public readonly user: {
      userId: string
    }
  ){}
}