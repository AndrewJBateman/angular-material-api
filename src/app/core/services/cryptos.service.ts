import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';

import {
  CryptoNewsApiResponse,
  CryptoNews,
} from '../../shared/models/crypto-news';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CryptosService {
  private _cryptosApiUrl =
    'https://min-api.cryptocompare.com/data/v2/news/?lang=EN';
  private _cryptoNews$: Observable<CryptoNews[]>;
  public currentItem: any; // used by news detail page

  constructor(private _http: HttpClient, private router: Router) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('authorization', environment.cryptoApiKey);

    this._cryptoNews$ = this._http
      .get<CryptoNewsApiResponse>(this._cryptosApiUrl, { headers })
      .pipe(
        take(1),
        tap((res: CryptoNewsApiResponse) => {
          console.log('API status message: ', res.Message);
        }),
        map((res) => res.Data),
        catchError((error) => {
          return throwError('API data not found!', error);
        })
      );
  }

  get cryptoNews$(): Observable<CryptoNews[]> {
    return this._cryptoNews$;
  }

  // navigate to news-detail page to show news item detail
  getNewsDetail(newsItem: CryptoNews) {
    this.currentItem = newsItem;
    this.router.navigate(['/news-detail']);
  }
}
