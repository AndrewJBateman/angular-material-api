import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="app">
  <app-navbar></app-navbar>
  <div class="main">
    <router-outlet></router-outlet>
  </div>
</div>`
})
export class AppComponent {
  title = 'angular-material-api';
}
