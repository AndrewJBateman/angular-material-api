import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'news-detail',
    loadChildren: () =>
      import('./news-detail/news-detail.module').then(
        (m) => m.NewsDetailModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((mod) => mod.AboutModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((mod) => mod.ContactModule),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
