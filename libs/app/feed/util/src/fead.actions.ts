import {IUser} from '@mp/api/users/util'
import {IPost} from '@mp/api/newsfeed/util'

export class generatePost {
  static readonly type = '[Newsfeed] generatePost';
}

export class setPage {
  static readonly type = '[Newsfeed] setPage'
  constructor(public readonly posts: IPost[] |undefined| null) {}
}

export class generateNewsFeed{
  static readonly type='[NewsFeed] generateNewsFeed';
}

export class updateNewsFeedPost{
  static readonly type= '[NewsFeed] updateNewsFeedPost';
}