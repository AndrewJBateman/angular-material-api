import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

import { SharedModule } from '../shared/shared.module';

import { NewsDetailRoutingModule } from './news-detail-routing.module';
import { NewsDetailComponent } from './news-detail.component';


@NgModule({
  declarations: [
    NewsDetailComponent
  ],
  imports: [
    CommonModule,
    NewsDetailRoutingModule,
    MatGridListModule,
    MatIconModule,
    SharedModule
  ]
})
export class NewsDetailModule { }
