import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavbarComponent } from './navbar/navbar.component';
import { ImagePipe } from './pipes/image.pipe';
import { SanitizeDomPipe } from './pipes/sanitize-dom.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: [
    NavbarComponent,
    ImagePipe,
    SanitizeDomPipe
  ],
  exports: [
    NavbarComponent,
    ImagePipe,
    SanitizeDomPipe
  ]
})
export class SharedModule { }
