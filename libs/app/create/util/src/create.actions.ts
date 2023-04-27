export class CreatePost {
  static readonly type = '[Create] CreatePost';
  constructor(
    public readonly post: {
      poster: string | null | undefined;
      description: string;
      mediaUrl?: string;
    }
  ) {}
}
