import { Route } from '@angular/router';
import { FeedComponent } from './feed.component';

export const appFeedFeatureRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: FeedComponent },
];
