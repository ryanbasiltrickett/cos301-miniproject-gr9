export class BrowseAction{
    static readonly type = '[Browse] Browse';
    constructor(
        public readonly search: {
          userName: string
        }
      ) {}
}

export class ClearBrowseAction{
  static readonly type = '[Browse] Clear';
}

export class GetTrendingAction{
  static readonly type = '[Browse] Trending';
}