import { Component } from "@angular/core";
import { IPost } from "@mp/api/posts/util";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { FeedState } from '@mp/app/feed/data-access';

@Component({
    selector: 'mp-feed-page',
    templateUrl: './feed.page.component.html',
})
export class FeedPage {
    @Select(FeedState.feed) feed$: Observable<IPost[]> | undefined;
}