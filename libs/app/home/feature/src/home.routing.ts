import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'events',
        loadChildren: () =>
          import('@mp/app/events/feature').then((m) => m.EventsModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('@mp/app/profile/feature').then((m) => m.ProfileModule),
      },
      {
        path: 'browse',
        loadChildren: () =>
          import('@mp/app/search/feature').then(
            (m) => m.SearchModule
          ),
      },
      {
        path: 'feed',
        loadChildren: () =>
          import('@mp/app/feed/feature').then((m) => m.FeedModule),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('@mp/app/create/feature').then((m) => m.CreateModule),
      },
      {
        path: 'settings',
        loadChildren:  () =>
          import('@mp/app/settings/feature').then((m) => m.SettingsModule),
      },
      {
        path: 'post/:postid',
        loadChildren: () =>
          import('@mp/app/post/feature').then((m) => m.PostPageFeatureModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home/feed',
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home/dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRouting {}
