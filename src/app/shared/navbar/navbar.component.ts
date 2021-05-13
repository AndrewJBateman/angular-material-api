import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private _title = 'CryptoCurrency News';
  get title(): string {
    return this._title;
  }
  @Input()
  set title(title: string) {
    this._title = title ? title : 'CryptoCurrency News';
  }

  constructor() {}

  ngOnInit() {}
}
