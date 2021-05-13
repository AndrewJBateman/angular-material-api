import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ImagePipe } from './pipes/image.pipe';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [ImagePipe],
  exports: [ImagePipe],
})
export class SharedModule {}
