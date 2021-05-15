import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { NgMeta } from 'ngmeta';

import { CryptosService } from '../core/services/cryptos.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
})
export class NewsDetailComponent implements OnInit {
  public currentItem: any;

  constructor(
    private _cryptoService: CryptosService,
    private _route: ActivatedRoute,
    // private _ngmeta: NgMeta,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.currentItem = this._cryptoService.currentItem;

  }
  goBack() {
    this.router.navigateByUrl('/');
  }
}
