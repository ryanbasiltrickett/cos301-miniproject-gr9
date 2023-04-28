import { IComment } from "@mp/api/posts/util";

export class GetPost {
  static readonly type = '[Post] GetPost';
  constructor(public readonly id: string) {}
}

export class addComment {
  static readonly type = '[Post] AddComment';
  constructor(public readonly id: string, public readonly text: string,public readonly usernam: string ) {}
}

export class deleteComment {
  static readonly type = '[Post] DeleteComment';
  constructor(public readonly index: number) {}
}

