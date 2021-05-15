# Angular Material Api

* Angular app to display crypto currency information from a REST API using Angular Material
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-material-api?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-material-api?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-material-api?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-material-api?style=plastic)

## :page_facing_up: Table of contents

* [Angular Material Api](#angular-material-api)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* To generate a component with module and routing: `ng g m my-page --routing=true` && `ng g c my-page -m=my-page`
* The Home page displays a list of crypto news.
* The `cryptos.service.ts` files uses the rxjs operator take(1) which just takes the first value and completes. No further logic is involved. If there is no data then take(1) simply returns nothing.
* The News Detail page displays the crypto news item the user has clicked on.
* Convention for Typescript variable names: `_example` = private variable, `_crypto$` = private observable
* Seems like you do not need the API key to get news from the [CryptoCompare API](https://min-api.cryptocompare.com/)

## :camera: Screenshots

* tba

## :signal_strength: Technologies

* [Angular v11](https://angular.io/)
* [Angular Service Workers](https://angular.io/guide/service-worker-getting-started) added for Progressive Web App funcionality
* [http-server](https://www.npmjs.com/package/http-server) command line http server to test PWA
* [RxJS v7](http://reactivex.io/) operators for async observable streams
* [Express v4](https://www.npmjs.com/package/express) Node.js framework

## :floppy_disk: Setup

* Install dependencies using `npm i`
* `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* `ng build --prod` to build the project with PWA. The build artifacts will be stored in the `dist/angular-material-api` directory.
* Add `defer` to `dist/angular-material-api/index.html` to make loading of styles asynchronous, e.g. `<link rel="stylesheet" href="styles.d6d9df648b6debafe22a.css" defer>`
* `npm i -g http-server` to globally install a http server to run the PWA with service workers
* `http-server -p 8080 -c-1 dist/angular-material-api` to view on a dev server
* `ng update` to update Angular

## :computer: Code Examples

* f

```typescript

```

## :cool: Features

* Lazy-loading of all modules

## :clipboard: Status & To-Do List

* Status: Working PWA with 81% lighthouse score and 100& accessibility, Best Practises, SEO.
* To-Do: Add Apple Touch Icon. Correct image sizing on Home page, add nav menu about and contact page. Add SSR. Add more crypto info pages.

## :clap: Inspiration

* [Typescript documentation](https://www.typescriptlang.org/docs/)
* [Material Theming](https://material.io/design/material-theming/overview.html#using-material-theming)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
