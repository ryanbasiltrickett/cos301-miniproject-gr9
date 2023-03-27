import { INewsfeed } from '../interfaces';

export class genNewsfeedEvent {
  constructor(public readonly newsfeed: INewsfeed) {}
}
