# Angular Material Api

* Angular 11 app to display crypto currency information from a REST API using Angular Material

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-material-api?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/AndrewJBateman/angular-material-api?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-material-api?style=for-the-badge)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-material-api?style=for-the-badge)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/AndrewJBateman/angular-material-api?style=for-the-badge)

*** Note: to open web links in a new window use: _ctrl+click on link_**

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

* to generate a component with module and routing: `ng g m my-page --routing=true` && `ng g c my-page -m=my-page`
* The Home page displays list of crypto news. The `cryptos.service.ts` files uses the rxjs operator take(1) which just takes the first value and completes. No further logic is involved. If there is no data then take(1) simply returns nothing.
* The News Detail page displays the crypto news item the user has clicked on.

## :camera: Screenshots

* f

## :signal_strength: Technologies

* [Angular v11](https://angular.io/)
* [RxJS](http://reactivex.io/) operators for async observable streams
* [Firebase v8](https://firebase.google.com) Cloud storage and authentication.
* [Firebase Tools v9](https://www.npmjs.com/package/firebase-tools) CLI used to manage a Firebase project
* [AngularFire v6](https://www.npmjs.com/package/@angular/fire) Angular library for Firebase
* [Express v4](https://www.npmjs.com/package/express) Node.js framework

## :floppy_disk: Setup

* Install dependencies using `npm i`
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
* Run `ng update` to update Angular

## :computer: Code Examples

* f

```typescript

```

## :cool: Features

* convention for Typescript variable names: `_example` = private variable, `_crypto$` = private observable

## :clipboard: Status & To-Do List

* Status: In work. Add navigation extras with state to pass API data to detail page or use stored API data.
* To-Do: get crypto service working and add html template to show data/images. Add API response model. Change color scheme. Add pages. Add PWA and SSR. Do lighthouse tests

## :clap: Inspiration

* [Typescript documentation](https://www.typescriptlang.org/docs/)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
