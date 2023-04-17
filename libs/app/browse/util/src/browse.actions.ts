export class BrowseAction{
    static readonly type = '[Browse] Browse';
    constructor(
        public readonly search: {
          userName: string
        }
      ) {}
}