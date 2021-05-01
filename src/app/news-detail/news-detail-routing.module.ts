import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsDetailComponent } from './news-detail.component';

const routes: Routes = [
  { path: ':id', component: NewsDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsDetailRoutingModule { }
