export class GetPost {
  static readonly type = '[Post] GetPost';
  constructor(public readonly id: string) {}
}
