import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgMeta } from 'ngmeta';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { CryptosService } from '../core/services/cryptos.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit, OnDestroy {
  private _idSubscription: Subscription = new Subscription;
  private _cryptoNewsItem: any;

  constructor(private _cryptoService: CryptosService, private _route: ActivatedRoute, private _ngmeta: NgMeta) { }

  ngOnInit(): void {
    this._idSubscription = this._route.params.subscribe((params: any) => {
      console.log("params: ", params);
      this._cryptoService.getCryptoNewsDetail(params.id).pipe((first())).subscribe(res => {
        this._cryptoNewsItem = res;
        console.log("news detail item", this._cryptoNewsItem);
        this._ngmeta.setAll({
          title: res.title + ' | ' + environment.title,
          description: res.tags
        });
      });
    });
  }

  ngOnDestroy() {
    this._idSubscription.unsubscribe();
  }

    get newsItem(): any {
    return this._cryptoNewsItem;
  }

}
