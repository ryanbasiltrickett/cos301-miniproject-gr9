import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'notification',
        loadChildren: () =>
          import('@mp/app/notification/feature').then((m) => m.NotificationModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('@mp/app/profile/feature').then((m) => m.ProfileModule),
      },
      {
        path: 'feed',
        loadChildren: () =>
          import('@mp/app/feed/feature').then((m) => m.AppFeedFeatureModule),
      },
      {
        path: 'browse',
        loadChildren: () =>
          import('@mp/app/browse/feature').then(
            (m) => m.AppBrowseFeatureModule
          ),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('@mp/app/create/feature').then(
            (m) => m.CreateModule
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home/feed',
      },
      {
        path: 'settings',
        loadChildren:  () =>
          import('@mp/app/settings/feature').then((m) => m.SettingsPage),
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
