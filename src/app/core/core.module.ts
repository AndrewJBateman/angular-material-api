import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgMeta } from 'ngmeta';

import { CryptosService } from './services/cryptos.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return { ngModule: CoreModule, providers: [CryptosService, NgMeta] };
  }
}
