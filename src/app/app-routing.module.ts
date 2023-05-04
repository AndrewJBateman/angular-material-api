import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module'),
  },
  {
    path: 'news-detail',
    loadChildren: () => import('./news-detail/news-detail.module'),
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module'),
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module'),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
