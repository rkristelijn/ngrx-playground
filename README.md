# NgrxPlayground

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Initial Set-up

```bash
ng new ngrx-playground
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
CREATE ngrx-playground/README.md (1031 bytes)
CREATE ngrx-playground/.editorconfig (246 bytes)
CREATE ngrx-playground/.gitignore (631 bytes)
CREATE ngrx-playground/angular.json (3727 bytes)
CREATE ngrx-playground/package.json (1292 bytes)
CREATE ngrx-playground/tsconfig.json (543 bytes)
CREATE ngrx-playground/tslint.json (1953 bytes)
CREATE ngrx-playground/browserslist (429 bytes)
CREATE ngrx-playground/karma.conf.js (1027 bytes)
CREATE ngrx-playground/tsconfig.app.json (210 bytes)
CREATE ngrx-playground/tsconfig.spec.json (270 bytes)
CREATE ngrx-playground/src/favicon.ico (948 bytes)
CREATE ngrx-playground/src/index.html (300 bytes)
CREATE ngrx-playground/src/main.ts (372 bytes)
CREATE ngrx-playground/src/polyfills.ts (2838 bytes)
CREATE ngrx-playground/src/styles.scss (80 bytes)
CREATE ngrx-playground/src/test.ts (753 bytes)
CREATE ngrx-playground/src/assets/.gitkeep (0 bytes)
CREATE ngrx-playground/src/environments/environment.prod.ts (51 bytes)
CREATE ngrx-playground/src/environments/environment.ts (662 bytes)
CREATE ngrx-playground/src/app/app-routing.module.ts (246 bytes)
CREATE ngrx-playground/src/app/app.module.ts (393 bytes)
CREATE ngrx-playground/src/app/app.component.scss (0 bytes)
CREATE ngrx-playground/src/app/app.component.html (25705 bytes)
CREATE ngrx-playground/src/app/app.component.spec.ts (1086 bytes)
CREATE ngrx-playground/src/app/app.component.ts (220 bytes)
CREATE ngrx-playground/e2e/protractor.conf.js (808 bytes)
CREATE ngrx-playground/e2e/tsconfig.json (214 bytes)
CREATE ngrx-playground/e2e/src/app.e2e-spec.ts (648 bytes)
CREATE ngrx-playground/e2e/src/app.po.ts (301 bytes)
✔ Packages installed successfully.
```

## Prettier

Used slightly outdated https://medium.com/@leonardomendoza/angular-7-prettier-99ffbec05363

`npm i -D prettier pretty-quick husky tslint-config-prettier`

add to `package.json`

```json
"husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged && ng lint",
    }
  }
```

add to `tslint.json`

```json
  "extends": ["tslint:recommended", "tslint-config-prettier"],
```

create `.vscode/settings.json`

```json
{
  "editor.formatOnSave": true
}
```

create `.prettierignore`

```
package.json
package-lock.json
dist
.angulardoc.json
angular.json
.vscode/*
```

try a commit and see if prettier and lint run

If not:

- check if pre-commit is running a proper command
- and/or: `rm -rf .git/hooks/` `rm -rf node_modules` `npm i`

## Add conventional commits

> note: you can also try the [@commitlint/config-angular](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-angular) unsure yet what is the difference

`npm i -D @commitlint/cli @commitlint/config-conventional`

create `commitlint.config.js`:

```ts
module.exports = { extends: ['@commitlint/config-conventional'] }
```

add to `package.json`:

```json
"husky": {
    "hooks": {
      "...": "...",
      "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS",
    }
  }
```

## Add pre-push

add to `package.json`:

```json
"husky": {
    "hooks": {
      "...": "...",
      "pre-push": "ng build"
    }
  }
```
