export class CreatePost {
  static readonly type = '[Create] CreatePost';
  constructor(
    public readonly post: {
      poster: string;
      description: string;
      mediaUrl?: string;
    }
  ) {}
}
