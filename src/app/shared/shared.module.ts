import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavbarComponent } from './navbar/navbar.component';
import { ImagePipe } from './pipes/image.pipe';
import { SanitizeDomPipe } from './pipes/sanitize-dom.pipe';
import { PosterPipe } from './pipes/poster.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: [
    PosterPipe,
    NavbarComponent,
    ImagePipe,
    SanitizeDomPipe,
    PosterPipe
  ],
  exports: [
    PosterPipe,
    NavbarComponent,
    ImagePipe,
    SanitizeDomPipe
  ]
})
export class SharedModule { }