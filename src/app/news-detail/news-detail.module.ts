import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

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
    MatCardModule,
    MatIconModule,
    SharedModule
  ]
})
export class NewsDetailModule { }
