import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgMeta } from 'ngmeta';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { CryptosService } from '../core/services/cryptos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor(private _cs: CryptosService, private _ngmeta: NgMeta) { }

  ngOnInit(): void {
    this._ngmeta.setAll({
      title: environment.title,
      description: environment.description
    });
  }

  get cryptos$(): Observable<any[]> {
    return this._cs.cryptos$;
  }

}
