import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SvgContactComponent } from 'src/app/components/svg-contact/svg-contact.component';
import { SvgInfoComponent } from 'src/app/components/svg-info/svg-info.component';
import { SvgGithubModule } from 'src/app/components/svg-github/svg-github.module';
import { SvgListComponent } from 'src/app/components/svg-list/svg-list.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SvgInfoComponent,
    SvgContactComponent,
    SvgListComponent,
  ],
  imports: [CommonModule, MatToolbarModule, MatIconModule, RouterModule, SvgGithubModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
