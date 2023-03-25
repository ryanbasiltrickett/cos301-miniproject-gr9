import { Route } from '@angular/router';
import { BrowseComponent } from './browse.component';

export const appBrowseFeatureRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: BrowseComponent },
];
