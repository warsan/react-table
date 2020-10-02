Этот проект был загружен с помощью [Create React App](https://github.com/facebookincubator/create-react-app).

Ниже вы найдете некоторую информацию о том, как выполнять общие задачи.<br>
Вы можете найти самую последнюю версию этого руководства [здесь](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Оглавление

- [Updating to New Releases](#updating-to-new-releases)
- [Sending Feedback](#sending-feedback)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
- [Supported Browsers](#supported-browsers)
- [Supported Language Features and Polyfills](#supported-language-features-and-polyfills)
- [Syntax Highlighting in the Editor](#syntax-highlighting-in-the-editor)
- [Displaying Lint Output in the Editor](#displaying-lint-output-in-the-editor)
- [Debugging in the Editor](#debugging-in-the-editor)
- [Formatting Code Automatically](#formatting-code-automatically)
- [Changing the Page `<title>`](#changing-the-page-title)
- [Installing a Dependency](#installing-a-dependency)
- [Importing a Component](#importing-a-component)
- [Code Splitting](#code-splitting)
- [Adding a Stylesheet](#adding-a-stylesheet)
- [Post-Processing CSS](#post-processing-css)
- [Adding a CSS Preprocessor (Sass, Less etc.)](#adding-a-css-preprocessor-sass-less-etc)
- [Adding Images, Fonts, and Files](#adding-images-fonts-and-files)
- [Using the `public` Folder](#using-the-public-folder)
  - [Changing the HTML](#changing-the-html)
  - [Adding Assets Outside of the Module System](#adding-assets-outside-of-the-module-system)
  - [When to Use the `public` Folder](#when-to-use-the-public-folder)
- [Using Global Variables](#using-global-variables)
- [Adding Bootstrap](#adding-bootstrap)
  - [Using a Custom Theme](#using-a-custom-theme)
- [Adding Flow](#adding-flow)
- [Adding a Router](#adding-a-router)
- [Adding Custom Environment Variables](#adding-custom-environment-variables)
  - [Referencing Environment Variables in the HTML](#referencing-environment-variables-in-the-html)
  - [Adding Temporary Environment Variables In Your Shell](#adding-temporary-environment-variables-in-your-shell)
  - [Adding Development Environment Variables In `.env`](#adding-development-environment-variables-in-env)
- [Can I Use Decorators?](#can-i-use-decorators)
- [Fetching Data with AJAX Requests](#fetching-data-with-ajax-requests)
- [Integrating with an API Backend](#integrating-with-an-api-backend)
  - [Node](#node)
  - [Ruby on Rails](#ruby-on-rails)
- [Proxying API Requests in Development](#proxying-api-requests-in-development)
  - ["Invalid Host Header" Errors After Configuring Proxy](#invalid-host-header-errors-after-configuring-proxy)
  - [Configuring the Proxy Manually](#configuring-the-proxy-manually)
  - [Configuring a WebSocket Proxy](#configuring-a-websocket-proxy)
- [Using HTTPS in Development](#using-https-in-development)
- [Generating Dynamic `<meta>` Tags on the Server](#generating-dynamic-meta-tags-on-the-server)
- [Pre-Rendering into Static HTML Files](#pre-rendering-into-static-html-files)
- [Injecting Data from the Server into the Page](#injecting-data-from-the-server-into-the-page)
- [Running Tests](#running-tests)
  - [Filename Conventions](#filename-conventions)
  - [Command Line Interface](#command-line-interface)
  - [Version Control Integration](#version-control-integration)
  - [Writing Tests](#writing-tests)
  - [Testing Components](#testing-components)
  - [Using Third Party Assertion Libraries](#using-third-party-assertion-libraries)
  - [Initializing Test Environment](#initializing-test-environment)
  - [Focusing and Excluding Tests](#focusing-and-excluding-tests)
  - [Coverage Reporting](#coverage-reporting)
  - [Continuous Integration](#continuous-integration)
  - [Disabling jsdom](#disabling-jsdom)
  - [Snapshot Testing](#snapshot-testing)
  - [Editor Integration](#editor-integration)
- [Debugging Tests](#debugging-tests)
  - [Debugging Tests in Chrome](#debugging-tests-in-chrome)
  - [Debugging Tests in Visual Studio Code](#debugging-tests-in-visual-studio-code)
- [Developing Components in Isolation](#developing-components-in-isolation)
  - [Getting Started with Storybook](#getting-started-with-storybook)
  - [Getting Started with Styleguidist](#getting-started-with-styleguidist)
- [Publishing Components to npm](#publishing-components-to-npm)
- [Making a Progressive Web App](#making-a-progressive-web-app)
  - [Opting Out of Caching](#opting-out-of-caching)
  - [Offline-First Considerations](#offline-first-considerations)
  - [Progressive Web App Metadata](#progressive-web-app-metadata)
- [Analyzing the Bundle Size](#analyzing-the-bundle-size)
- [Deployment](#deployment)
  - [Static Server](#static-server)
  - [Other Solutions](#other-solutions)
  - [Serving Apps with Client-Side Routing](#serving-apps-with-client-side-routing)
  - [Building for Relative Paths](#building-for-relative-paths)
  - [Azure](#azure)
  - [Firebase](#firebase)
  - [GitHub Pages](#github-pages)
  - [Heroku](#heroku)
  - [Netlify](#netlify)
  - [Now](#now)
  - [S3 and CloudFront](#s3-and-cloudfront)
  - [Surge](#surge)
- [Advanced Configuration](#advanced-configuration)
- [Troubleshooting](#troubleshooting)
  - [`npm start` doesn’t detect changes](#npm-start-doesnt-detect-changes)
  - [`npm test` hangs on macOS Sierra](#npm-test-hangs-on-macos-sierra)
  - [`npm run build` exits too early](#npm-run-build-exits-too-early)
  - [`npm run build` fails on Heroku](#npm-run-build-fails-on-heroku)
  - [`npm run build` не удается минимизировать](#npm-run-build-не-удается-минимизировать)
  - [Moment.js locales are missing](#momentjs-locales-are-missing)
- [Alternatives to Ejecting](#alternatives-to-ejecting)
- [Something Missing?](#something-missing)

## Updating to New Releases

Приложение Create React разделено на два пакета:

* `create-react-app` - это глобальная утилита командной строки, которую вы используете для создания новых проектов.
* `react-scripts` является зависимостью развития в сгенерированных проектах (включая этот).

Вам почти никогда не нужно обновлять само приложение `create-react-app`: оно делегирует всю настройку `react-scripts`.

Когда вы запускаете `create-react-app`, он всегда создает проект с последней версией `react-scripts`, поэтому вы автоматически получаете все новые функции и улучшения во вновь созданных приложениях.

Чтобы обновить существующий проект до новой версии `react-scripts`, 
[откройте журнал изменений](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md), 
найдите версию вы в данный момент находитесь (проверьте `package.json` в этой папке, если вы не уверены) 
и примените инструкции по миграции для более новых версий.

В большинстве случаев достаточно использовать версию `react-scripts` в` package.json` и запустить `npm install` в этой папке, 
но лучше проконсультироваться с [журналом изменений](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md) 
для потенциальных критических изменений.

Мы обязуемся минимизировать критические изменения, чтобы вы могли безболезненно обновлять `react-scripts`.

## Sending Feedback

Мы всегда открыты для [вашего отзыва](https://github.com/facebookincubator/create-react-app/issues).

## Folder Structure

После создания ваш проект должен выглядеть так:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

Для сборки проекта **эти файлы должны существовать с точными именами**:

* `public/index.html` это шаблон страницы;
* `src/index.js` это точка входа в JavaScript.

Вы можете удалить или переименовать другие файлы.

Вы можете создавать подкаталоги внутри `src`. Для более быстрой перестройки Webpack обрабатывает только файлы внутри `src`.<br>
Вам необходимо **поместить любые файлы JS и CSS в `src`**, иначе Webpack их не увидит.

Из файла `public/index.html` можно использовать только файлы внутри `public`.<br>
Прочтите инструкции ниже по использованию ресурсов из JavaScript и HTML.

Однако вы можете создать больше каталогов верхнего уровня.<br>
Они не будут включены в рабочую сборку, поэтому вы можете использовать их для таких вещей, как документация.

## Available Scripts

В каталоге проекта вы можете запустить:

### `npm start`

Запускает приложение в режиме разработки.<br>
Откройте [http://localhost:3000](http://localhost:3000), чтобы просмотреть его в браузере.

Если вы внесёте правки, страница перезагрузится.<br>
Вы также увидите любые ошибки ворса в консоли.

### `npm test`

Запускает тестовый раннер в интерактивном режиме часов.<br>
См. Раздел о [запущенных тестах](#running-tests) для получения дополнительной информации.

### `npm run build`

Собирает приложение для производства в папку `build`.<br>
Он правильно связывает React в рабочем режиме и оптимизирует сборку для достижения максимальной производительности.

Сборка минифицирована, а имена файлов включают хеши.<br>
Ваше приложение готово к развёртыванию!

See the section about [deployment](#deployment) for more information.
См. Раздел о [развертывании](#deployment) для получения дополнительной информации.

### `npm run eject`

**Примечание: это односторонняя операция. После `eject` вы не сможете вернуться!**

Если вас не устраивает инструмент сборки и выбор конфигурации, вы можете выполнить `eject`-извлечение в любой момент. 
Эта команда удалит из вашего проекта зависимость отдельной сборки.

Вместо этого он скопирует все файлы конфигурации и транзитивные зависимости (Webpack, Babel, ESLint и т.д.) прямо в ваш проект, чтобы вы имели полный контроль над ними. Все команды, кроме `eject`, по-прежнему будут работать, но они будут указывать на скопированные сценарии, чтобы вы могли их настроить. На этом этапе вы сами по себе.

Вам не нужно использовать ʻeject`. Кураторский набор функций подходит для малых и средних предприятий, и вы не должны чувствовать себя обязанными использовать эту функцию. Однако мы понимаем, что этот инструмент бесполезен, если вы не сможете настроить его, когда будете к нему готовы.

## Supported Browsers

По умолчанию в сгенерированном проекте используется последняя версия React.

Вы можете обратиться [к документации React](https://reactjs.org/docs/react-dom.html#browser-support) для получения дополнительной информации о поддерживаемых браузерах.

## Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard.<br>
In addition to [ES6](https://github.com/lukehoban/es6features) syntax features, it also supports:
Этот проект поддерживает расширенный набор последних стандартов JavaScript.<br>
Помимо функций синтаксиса [ES6](https://github.com/lukehoban/es6features), он также поддерживает:

* [Оператор возведения в степень](https://github.com/rwaldron/exponentiation-operator) (ES2016).
* [Асинхронный/ожидание](https://github.com/tc39/ecmascript-asyncawait) (ES2017).
* [Свойства объекта Rest/Spread](https://github.com/sebmarkbage/ecmascript-rest-spread) (предложение этапа 3).
* [Динамический import()](https://github.com/tc39/proposal-dynamic-import) (предложение этапа 3)
* [Поля классов и статические свойства](https://github.com/tc39/proposal-class-public-fields) (часть предложения этапа 3).
* [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) и [Flow](https://flowtype.org/) синтаксис.

Подробнее о [различных этапах предложения](https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-).

Хотя мы рекомендуем использовать экспериментальные предложения с некоторой осторожностью, Facebook активно использует эти функции в коде продукта, поэтому мы намерены предоставить [codemods](https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb), если какое-либо из этих предложений изменится в будущем.
Note that **the project only includes a few ES6 [polyfills](https://en.wikipedia.org/wiki/Polyfill)**:

* [`Object.assign()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) через [`object-assign`](https://github.com/sindresorhus/object-assign).
* [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) через [`promise`](https://github.com/then/promise).
* [`fetch()`](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) через [`whatwg-fetch`](https://github.com/github/fetch).

Если вы используете какие-либо другие функции ES6+, которые нуждаются в **поддержке времени выполнения** (например, ʻArray.from()` или `Symbol`), убедитесь, что вы вручную включаете соответствующие полифиллы или что браузеры, на которые вы нацеливаете, уже поддерживают их.

Также обратите внимание, что использование некоторых новых синтаксических функций, таких как `for...of` или `[...nonArrayValue]` заставляет Babel генерировать код, который зависит от функций времени выполнения ES6 и может не работать без полифила. В случае сомнений используйте [Babel REPL](https://babeljs.io/repl/), чтобы узнать, до чего компилируется какой-либо конкретный синтаксис.

## Syntax Highlighting in the Editor

Чтобы настроить подсветку синтаксиса в вашем любимом текстовом редакторе, перейдите на [соответствующую страницу документации Babel](https://babeljs.io/docs/editors) и следуйте инструкциям. Охвачены некоторые из самых популярных редакторов.

## Displaying Lint Output in the Editor

>Примечание: эта функция доступна в `react-scripts@0.2.0` и выше.<br>
>Он также работает только с npm 3 и выше.

Некоторые редакторы, включая Sublime Text, Atom и Visual Studio Code, предоставляют плагины для ESLint.

Для линтинга они не требуются. Вы должны увидеть вывод линтера прямо в вашем терминале, а также в консоли браузера. Однако, если вы предпочитаете, чтобы результаты линта отображались прямо в редакторе, вы можете сделать несколько дополнительных шагов.

Сначала вам нужно будет установить плагин ESLint для вашего редактора. Затем добавьте файл с именем `.eslintrc` в корень проекта:

```js
{
  "extends": "react-app"
}
```

Теперь ваш редактор должен сообщить о предупреждениях о линтинге.

Обратите внимание, что даже если вы продолжите редактирование файла `.eslintrc`, эти изменения **повлияют только на интеграцию редактора**. Они не повлияют на вывод lint в терминале и в браузере. Это связано с тем, что приложение Create React намеренно предоставляет минимальный набор правил, позволяющих находить типичные ошибки.

Если вы хотите применить стиль кодирования для своего проекта, подумайте об использовании [Prettier](https://github.com/jlongster/prettier) вместо правил стиля ESLint.

## Debugging in the Editor

**Эта функция в настоящее время поддерживается только [Visual Studio Code](https://code.visualstudio.com) и [WebStorm](https://www.jetbrains.com/webstorm/).**

Visual Studio Code и WebStorm сразу же поддерживают отладку с помощью приложения Create React. Это позволяет вам, как разработчику, писать и отлаживать свой код React, не выходя из редактора, и, что наиболее важно, позволяет вести непрерывный рабочий процесс разработки, при котором переключение контекста минимально, так как вам не нужно переключаться между инструментами.

### Visual Studio Code

Вам потребуется последняя версия [VS Code](https://code.visualstudio.com) и установленный VS Code [Chrome Debugger Extension](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome).

Затем добавьте приведенный ниже блок в ваш файл `launch.json` и поместите его в папку `.vscode` в корневом каталоге вашего приложения.

```json
{
  "version": "0.2.0",
  "configurations": [{
    "name": "Chrome",
    "type": "chrome",
    "request": "launch",
    "url": "http://localhost:3000",
    "webRoot": "${workspaceRoot}/src",
    "sourceMapPathOverrides": {
      "webpack:///src/*": "${webRoot}/*"
    }
  }]
}
```
>Примечание. URL-адрес может быть другим, если вы внесли изменения с помощью [переменных среды HOST или PORT](#advanced-configuration).

Запустите приложение через `npm start` и начните отладку в VS Code, нажав `F5` или зеленый значок отладки. Теперь вы можете писать код, устанавливать точки останова, вносить изменения в код и отлаживать недавно измененный код - и все это из редактора.

Возникли проблемы с отладкой кода VS? См. Их [руководство по устранению неполадок](https://github.com/Microsoft/vscode-chrome-debug/blob/master/README.md#troubleshooting).

### WebStorm

Вам потребуется [WebStorm](https://www.jetbrains.com/webstorm/) и [поддержка JetBrains IDE](https://chrome.google.com/webstore/detail/jetbrains-ide-support/hmhgeddbohgjknpmjagkdomcpobmllji) Расширение Chrome установлено.

В меню WebStorm `Run` выберите `Edit Configurations...` Затем нажмите `+` и выберите `JavaScript Debug`. Вставьте `http://localhost:3000` в поле URL и сохраните конфигурацию.

>Примечание. URL-адрес может быть другим, если вы внесли изменения с помощью [переменных среды HOST или PORT](#advanced-configuration).

Запустите приложение через npm start, затем нажмите `^D` в macOS или `F9` в Windows и Linux или щелкните зеленый значок отладки, чтобы начать отладку в WebStorm.

Таким же образом вы можете отлаживать свое приложение в IntelliJ IDEA Ultimate, PhpStorm, PyCharm Pro и RubyMine.

## Formatting Code Automatically

Prettier - это самоуверенный форматтер кода с поддержкой JavaScript, CSS и JSON. С Prettier вы можете форматировать код, который вы пишете автоматически, чтобы обеспечить стиль кода в вашем проекте. См. [Страницу Prettier GitHub](https://github.com/prettier/prettier) для получения дополнительной информации и просмотрите эту [страницу, чтобы увидеть её в действии](https://prettier.github.io/prettier/).

Чтобы отформатировать наш код всякий раз, когда мы делаем коммит в git, нам нужно установить следующие зависимости:

```sh
npm install --save husky lint-staged prettier
```

В качестве альтернативы вы можете использовать `yarn`:

```sh
yarn add husky lint-staged prettier
```

* `husky` упрощает использование githooks, как если бы они были скриптами npm.
* `lint-staged` позволяет нам запускать скрипты для промежуточных файлов в git. См. [Сообщение в блоге о lint-staged, чтобы узнать больше](https://medium.com/@okonetchnikov/make-linting-great-again-f3890e1ad6b8).
* `prettier` - это средство форматирования JavaScript, которое мы запускаем перед фиксацией.

Теперь мы можем убедиться, что каждый файл отформатирован правильно, добавив несколько строк в файл `package.json` в корне проекта.

Добавьте следующую строку в раздел `scripts`:

```diff
  "scripts": {
+   "precommit": "lint-staged",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

Затем мы добавляем поле `lint-staged` в файл `package.json`, например:

```diff
  "dependencies": {
    // ...
  },
+ "lint-staged": {
+   "src/**/*.{js,jsx,json,css}": [
+     "prettier --single-quote --write",
+     "git add"
+   ]
+ },
  "scripts": {
```

Теперь, когда вы делаете коммит, Prettier автоматически форматирует изменённые файлы. 
Вы также можете запустить `./node_modules/.bin/prettier --single-quote --write "src/**/*.{js,jsx,json,css}"` для первого форматирования всего вашего проекта.

Next you might want to integrate Prettier in your favorite editor. Read the section on [Editor Integration](https://prettier.io/docs/en/editors.html) on the Prettier GitHub page.
Затем вы можете интегрировать Prettier в свой любимый редактор. 
Прочтите раздел [Интеграция в редактор](https://prettier.io/docs/en/editors.html) на странице Prettier GitHub.

## Changing the Page `<title>`

Вы можете найти исходный HTML-файл в папке `public` созданного проекта и отредактировать тег `<title>` в нем, чтобы изменить заголовок с «React App» на что-нибудь ещё.

Обратите внимание, что обычно вы нечасто редактируете файлы в папке `public`. Например, [добавление таблицы стилей](#add-a-stylesheet) выполняется без касания HTML.

Если вам нужно динамически обновлять заголовок страницы на основе содержимого, вы можете использовать браузер [`document.title`](https://developer.mozilla.org/en-US/docs/Web/API/Document/title) API. 
Для более сложных сценариев, когда вы хотите изменить заголовок из компонентов React, вы можете использовать стороннюю библиотеку [React Helmet](https://github.com/nfl/react-helmet).

Если вы используете собственный сервер для своего приложения в рабочей среде и хотите изменить заголовок, прежде чем он будет отправлен в браузер, вы можете следовать советам в [этом разделе](#generating-dynamic-meta-tags-on-the-server). 
Кроме того, вы можете предварительно создать каждую страницу как статический файл HTML, который затем загружает пакет JavaScript, который описан [здесь](#pre-rendering-into-static-html-files).

## Installing a Dependency

Созданный проект включает в себя React и ReactDOM в качестве зависимостей. Он также включает набор скриптов, используемых приложением Create React в качестве зависимости разработки. Вы можете установить другие зависимости (например, React Router) с помощью `npm`:

```sh
npm install --save react-router
```

В качестве альтернативы можете использовать `yarn`:

```sh
yarn add react-router
```

Это работает для любой библиотеки, а не только для `react-router`.

## Importing a Component

Эта установка проекта поддерживает модули ES6 благодаря Babel.<br>
Хотя вы всё ещё можете использовать `require()` и `module.exports`, взамен мы предлагаем [`import` и `export`](http://exploringjs.com/es6/ch_modules.html).

Например:

### `Button.js`

```js
import React, { Component } from 'react';

class Button extends Component {
  render() {
    // ...
  }
}

export default Button; // Не забудьте использовать экспорт по умолчанию!
```

### `DangerButton.js`


```js
import React, { Component } from 'react';
import Button from './Button'; // Импортировать компонент из другого файла

class DangerButton extends Component {
  render() {
    return <Button color="red" />;
  }
}

export default DangerButton;
```

Помните о [разнице между экспортом по умолчанию и именованным экспортом](http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281). Это частый источник ошибок.

Мы предлагаем вам придерживаться использования импорта и экспорта по умолчанию, когда модуль экспортирует только одну вещь (например, компонент).  
Это то, что вы получаете, когда используете `export default Button` и `import Button from './Button'`.

Именованный экспорт полезен для служебных модулей, которые экспортируют несколько функций.  
Модуль может иметь не более одного экспорта по умолчанию а именованных экспортов - столько, сколько вам нужно.

Узнайте больше о модулях ES6:

* [Когда использовать фигурные скобки?](http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281)
* [Изучение ES6: модули](http://exploringjs.com/es6/ch_modules.html)
* [Понимание ES6: модули](https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules)

## Code Splitting

Вместо загрузки всего приложения, прежде чем пользователи засмеются над ним, расщепление кода позволяет разделить код на небольшие куски, которые затем можно загрузить по требованию.

Эта настройка проекта поддерживает разделение кода через [dynamic `import()`](http://2ality.com/2017/01/import-operator.html#loading-code-on-demand). 
Его [предложение](https://github.com/tc39/proposal-dynamic-import) находится на этапе 3. Функциональная форма `import()` принимает имя модуля в качестве аргумента и возвращает [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), который всегда преобразуется в объект пространства имён модуля.

Вот пример:

### `moduleA.js`

```js
const moduleA = 'Hello';

export { moduleA };
```
### `App.js`

```js
import React, { Component } from 'react';

class App extends Component {
  handleClick = () => {
    import('./moduleA')
      .then(({ moduleA }) => {
        // Использовать moduleA
      })
      .catch(err => {
        // Обработка отказа
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Load</button>
      </div>
    );
  }
}

export default App;
```

Это сделает `moduleA.js` и все его уникальные зависимости в виде отдельного фрагмента, который загружается только после того, как пользователь щелкнет кнопку 'Load'.

Вы также можете использовать его с синтаксисом `async`/`await`, если хотите.

### With React Router

Если используете React Router, ознакомьтесь с [этим руководством](http://serverless-stack.com/chapters/code-splitting-in-create-react-app.html) там есть о разделении кода.
Сопутствующий репозиторий GitHub можно найти [здесь](https://github.com/AnomalyInnovations/serverless-stack-demo-client/tree/code-splitting-in-create-react-app).

Также ознакомьтесь с разделом [Разделение кода](https://reactjs.org/docs/code-splitting.html) в документации React.

## Adding a Stylesheet

Эта установка проекта использует [Webpack](https://webpack.js.org/) для обработки всех ресурсов. 
Webpack предлагает собственный способ «расширения» концепции `import` за пределы JavaScript. 
Чтобы указать, что файл JavaScript зависит от файла CSS, вам необходимо **импортировать CSS из файла JavaScript**:

### `Button.css`

```css
.Button {
  padding: 20px;
}
```

### `Button.js`

```js
import React, { Component } from 'react';
import './Button.css'; // Сообщите Webpack, что Button.js использует эти стили

class Button extends Component {
  render() {
    // Вы можете использовать их как обычные стили CSS.
    return <div className="Button" />;
  }
}
```

**Это не требуется для React**, но многие считают эту функцию удобной. Вы можете прочитать о преимуществах этого подхода [здесь](https://medium.com/seek-ui-engineering/block-element-modifying-your-javascript-components-d7f99fcab52b). 
Однако вы должны знать, что это делает ваш код менее переносимым для других инструментов и сред сборки, чем Webpack.

В процессе разработки такое выражение зависимостей позволяет перезагружать стили на лету по мере их редактирования. При производстве все файлы CSS будут объединены в один минифицированный файл `.css` в выводе сборки.

Если вас беспокоит использование специфической для Webpack семантики, вы можете поместить весь свой CSS прямо в `src/index.css`. 
Он по-прежнему будет импортирован из `src/index.js`, но вы всегда можете удалить этот импорт, если позже перейдете на другой инструмент сборки.

## Post-Processing CSS

Эта настройка проекта минимизирует ваш CSS и автоматически добавляет к нему префиксы поставщиков с помощью [Autoprefixer](https://github.com/postcss/autoprefixer), поэтому вам не нужно об этом беспокоиться.

Например, это:

```css
.App {
  display: flex;
  flex-direction: row;
  align-items: center;
}
```

становится этим:

```css
.App {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
```

Если вам по какой-либо причине необходимо отключить автопрефикс, [следуйте этому разделу](https://github.com/postcss/autoprefixer#disabling).

## Adding a CSS Preprocessor (Sass, Less etc.)

Как правило, мы не рекомендуем повторно использовать одни и те же классы CSS в разных компонентах. 
Например, вместо использования CSS-класса `.Button` в компонентах `<AcceptButton>` и `<RejectButton>` мы рекомендуем создать компонент `<Button>` с его собственными стилями `.Button`, которые оба `<AcceptButton>` и `<RejectButton>` могут отображать (но [не наследовать](https://facebook.github.io/react/docs/composition-vs-inheritance.html)).

Следование этому правилу часто делает препроцессоры CSS менее полезными, поскольку такие функции, как миксины и вложение, заменяются составом компонентов. Однако вы можете интегрировать препроцессор CSS, если сочтете его полезным. В этом пошаговом руководстве мы будем использовать Sass, но вы также можете использовать Less или другую альтернативу.

Во-первых, давайте установим интерфейс командной строки для Sass:

```sh
npm install --save node-sass-chokidar
```

В качестве альтернативы вы можете использовать `yarn`:

```sh
yarn add node-sass-chokidar
```

Затем в `package.json` добавьте следующие строки в `scripts`:

```diff
   "scripts": {
+    "build-css": "node-sass-chokidar src/ -o src/",
+    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test --env=jsdom",
```

>Примечание: Чтобы использовать другой препроцессор, замените команды `build-css` и `watch-css` в соответствии с документацией вашего препроцессора.

Теперь вы можете переименовать `src/App.css` в `src/App.scss` и запустить `npm run watch-css`.
Наблюдатель найдет каждый файл Sass в подкаталогах `src` и создаст рядом с ним соответствующий файл CSS, в нашем случае перезаписав `src/App.css`.
Поскольку `src/App.js` по-прежнему импортирует `src/App.css`, стили становятся частью вашего приложения. 
Теперь вы можете редактировать `src/App.scss`, и `src/App.css` будет восстановлен.

Чтобы обмениваться переменными между файлами Sass, вы можете использовать импорт Sass. 
Например, `src/App.scss` и другие файлы стилей компонентов могут включать `@import "./shared.scss";` с определениями переменных.

To enable importing files without using relative paths, you can add the  `--include-path` option to the command in `package.json`.
Чтобы разрешить импорт файлов без использования относительных путей, вы можете добавить параметр `--include-path` к команде в `package.json`.

```
"build-css": "node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/",
"watch-css": "npm run build-css && node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/ --watch --recursive",
```

Это позволит вам выполнять импорт, например

```scss
@import 'styles/_colors.scss'; // предполагая каталог стилей в src/
@import 'nprogress/nprogress'; // импорт файла css из модуля узла nprogress
```

На этом этапе вы можете удалить все файлы CSS из системы управления версиями и добавить `src/**/*.css` в ваш файл `.gitignore`. 
Обычно рекомендуется держать продукты сборки вне системы управления версиями.

В качестве последнего шага вам может показаться удобным запускать `watch-css` автоматически с помощью `npm start` и запускать `build-css` как часть `npm run build`. 
Вы можете использовать оператор `&&` для последовательного выполнения двух скриптов. Однако кроссплатформенного способа запуска двух скриптов параллельно нет, поэтому мы установим для этого пакет:

```sh
npm install --save npm-run-all
```

В качестве альтернативы можете использовать `yarn`:

```sh
yarn add npm-run-all
```

Затем мы можем изменить сценарии `start` и `build`, включив в них команды препроцессора CSS:

```diff
   "scripts": {
     "build-css": "node-sass-chokidar src/ -o src/",
     "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
-    "start": "react-scripts start",
-    "build": "react-scripts build",
+    "start-js": "react-scripts start",
+    "start": "npm-run-all -p watch-css start-js",
+    "build-js": "react-scripts build",
+    "build": "npm-run-all build-css build-js",
     "test": "react-scripts test --env=jsdom",
     "eject": "react-scripts eject"
   }
```

Теперь при запуске `npm start` и `npm run build` также создаются файлы Sass.

**Почему `node-sass-chokidar`?**

Сообщается, что `node-sass` имеет следующие проблемы:

- Сообщается, что у `node-sass --watch` *проблемы с производительностью* в определенных условиях при использовании на виртуальной машине или с докером.

- Компиляция бесконечных стилей [#1939](https://github.com/facebookincubator/create-react-app/issues/1939)

- Сообщается, что у `node-sass` есть проблемы с обнаружением новых файлов в каталоге [#1891](https://github.com/sass/node-sass/issues/1891)

 Здесь используется `node-sass-chokidar`, поскольку он решает эти проблемы.

## Adding Images, Fonts, and Files

В Webpack использование статических ресурсов, таких как изображения и шрифты, работает аналогично CSS.

Вы можете **`импортировать` файл прямо в модуле JavaScript**. Это указывает Webpack включить этот файл в пакет. В отличие от импорта CSS, при импорте файла вы получаете строковое значение. Это значение - последний путь, на который вы можете ссылаться в своем коде, например как атрибут `src` изображения или `href` ссылки на PDF.

Чтобы уменьшить количество запросов к серверу, при импорте изображений размером менее 10 000 байт вместо этого возвращается [URI данных](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) пути.
Это относится к файлам следующих расширений: bmp, gif, jpg, jpeg и png. Файлы SVG исключены из-за [#1153](https://github.com/facebookincubator/create-react-app/issues/1153).

Вот пример:

```js
import React from 'react';
import logo from './logo.png'; // Сообщите Webpack, что этот JS-файл использует это изображение

console.log(logo); // /logo.84287d09.png

function Header() {
  // Результат импорта - это URL вашего изображения
  return <img src={logo} alt="Logo" />;
}

export default Header;
```

Это гарантирует, что при построении проекта Webpack правильно переместит изображения в папку сборки и предоставит нам правильные пути.

Это работает и в CSS:

```css
.Logo {
  background-image: url(./logo.png);
}
```

Webpack находит все относительные ссылки на модули в CSS (они начинаются с `./`) И заменяет их конечными путями из скомпилированного пакета. Если вы сделаете опечатку или случайно удалите важный файл, вы увидите ошибку компиляции, как и при импорте несуществующего модуля JavaScript. Окончательные имена файлов в скомпилированном пакете генерируются Webpack из хэшей содержимого. Если содержимое файла изменится в будущем, Webpack даст ему другое имя в рабочей среде, поэтому вам не нужно беспокоиться о долгосрочном кэшировании ресурсов.

Обратите внимание, что это также настраиваемая функция Webpack.

**Это не требуется для React**, но многим это нравится (и React Native использует аналогичный механизм для изображений).<br>
Альтернативный способ работы со статическими активами описан в следующем разделе.

## Using the `public` Folder

>Примечание: эта функция доступна в `react-scripts@0.5.0` и выше.

### Changing the HTML

Папка `public` содержит HTML-файл, поэтому вы можете настроить его, например, чтобы [установить заголовок страницы](#changing-the-page-title).
Тег `<script>` со скомпилированным кодом будет добавлен к нему автоматически в процессе сборки.

### Adding Assets Outside of the Module System

Вы также можете добавить другие ресурсы в папку `public`.

Обратите внимание, что мы обычно рекомендуем вам вместо этого импортировать ресурсы в файлы JavaScript.
Например, см. Разделы [добавление таблицы стилей](#adding-a-stylesheet) и [добавление изображений и шрифтов](#adding-images-fonts-and-files).
Этот механизм дает ряд преимуществ:

* Сценарии и таблицы стилей минифицируются и объединяются во избежание дополнительных сетевых запросов.
* Отсутствующие файлы вызывают ошибки компиляции вместо ошибок 404 для ваших пользователей.
* Имена файлов результатов включают хэши контента, поэтому вам не нужно беспокоиться о том, что браузеры кешируют свои старые версии.

Однако есть **аварийный люк**, который вы можете использовать для добавления актива вне модульной системы.

Если вы поместите файл в папку «public», он **не** будет обработан Webpack. Вместо этого он будет скопирован в папку сборки нетронутой. Чтобы ссылаться на ресурсы в папке `public`, вам нужно использовать специальную переменную под названием `PUBLIC_URL`.

Внутри ʻindex.html` вы можете использовать его так:

```html
<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
```

Только файлы внутри папки `public` будут доступны с префиксом `%PUBLIC_URL%`. Если вам нужно использовать файл из `src` или `node_modules`, вы должны скопировать его туда, чтобы явно указать своё намерение сделать этот файл частью сборки.

Когда вы запускаете `npm run build`, Create React App заменяет `%PUBLIC_URL%` на правильный абсолютный путь, чтобы ваш проект работал, даже если вы используете маршрутизацию на стороне клиента или размещаете его по некорневому URL.

В коде JavaScript вы можете использовать `process.env.PUBLIC_URL` для аналогичных целей:

```js
render() {
  // Примечание: это аварийный люк, и его следует использовать с осторожностью!
  // Обычно мы рекомендуем использовать `import` для получения URL-адресов ресурсов,
  // как описано в разделе «Добавление изображений и шрифтов» выше этого раздела.
  return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;
}
```

Помните о недостатках этого подхода:

* Ни один из файлов в папке `public` не подвергается постобработке или минификации.
* Отсутствующие файлы не будут вызываться во время компиляции и вызовут ошибку 404 для ваших пользователей.
* Имена файлов результатов не будут включать хэши контента, поэтому вам нужно будет добавлять аргументы запроса или переименовывать их при каждом изменении.

### When to Use the `public` Folder

Обычно мы рекомендуем импортировать [таблицы стилей](#adding-a-stylesheet), [изображения и шрифты](#adding-images-fonts-and-files) из JavaScript.
Папка `public` полезна как обходной путь для ряда менее распространённых случаев:

* Вам нужен файл с определенным именем в выводе сборки, например [`manifest.webmanifest`](https://developer.mozilla.org/en-US/docs/Web/Manifest).
* У вас есть тысячи изображений, и вам необходимо динамически ссылаться на их пути.
* Вы хотите включить небольшой сценарий вроде [`pace.js`](http://github.hubspot.com/pace/docs/welcome/) вне связанного кода.
* Некоторая библиотека может быть несовместима с Webpack, и у вас нет другого выбора, кроме как включить ее как тег `<script>`.

Обратите внимание: если вы добавите `<script>`, который объявляет глобальные переменные, вам также необходимо прочитать следующий раздел об их использовании.

## Using Global Variables

Когда вы включаете сценарий в HTML-файл, который определяет глобальные переменные, и пытаетесь использовать одну из этих переменных в коде, линтер будет жаловаться, потому что он не может увидеть определение переменной.

Вы можете избежать этого, явно прочитав глобальную переменную из объекта `window`, например:

```js
const $ = window.$;
```

Это делает очевидным, что вы используете глобальную переменную намеренно, а не из-за опечатки.

Как вариант, вы можете заставить линтер игнорировать любую строку, добавив после неё `// eslint-disable-line`.

## Adding Bootstrap

Вам не обязательно использовать [React Bootstrap](https://react-bootstrap.github.io) вместе с React, хоть это и популярная библиотека для интеграции Bootstrap с приложениями React. Если вам это нужно, вы можете интегрировать его с приложением Create React, выполнив следующие действия:

Установите React Bootstrap и Bootstrap из npm. React Bootstrap не включает Bootstrap CSS, поэтому его также необходимо установить:

```sh
npm install --save react-bootstrap bootstrap@3
```

В качестве альтернативы можете использовать `yarn`:

```sh
yarn add react-bootstrap bootstrap@3
```

Импортируйте Bootstrap CSS и, возможно, CSS темы Bootstrap в начало вашего файла ```src/index.js```:

```js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Поместите любой другой импорт ниже, 
//чтобы CSS из ваших компонентов имел приоритет над стилями по умолчанию.
```

Импортируйте необходимые компоненты React Bootstrap в файл ```src/App.js``` или в файлы пользовательских компонентов:

```js
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
```

Теперь вы готовы использовать импортированные компоненты React Bootstrap в иерархии компонентов, определенной в методе рендеринга. Вот пример [`App.js`](https://gist.githubusercontent.com/gaearon/85d8c067f6af1e56277c82d19fd4da7b/raw/6158dd991b67284e9fc8d70b9d973efe87659d72/App.js) с использованием React Bootstrap.

### Using a Custom Theme

Иногда вам может потребоваться настроить визуальные стили Bootstrap (или аналогичного пакета).<br>
Предлагаем следующий подход:

* Создайте новый пакет, который зависит от пакета, который вы хотите настроить, например Bootstrap.
* Добавьте необходимые шаги сборки, чтобы настроить тему, и опубликуйте свой пакет на npm.
* Установите собственный пакет npm для темы в качестве зависимости от вашего приложения.

Вот пример добавления [настроенного Bootstrap](https://medium.com/@tacomanator/customizing-create-react-app-aa9ffb88165), который следует этим шагам.

## Adding Flow

Flow - это средство проверки статического типа, которое помогает писать код с меньшим количеством ошибок. 
Прочтите [введение в использование статических типов в JavaScript](https://medium.com/@preethikasireddy/why-use-static-types-in-javascript-part-1-8382da1e0adb), если вы новичок в этой концепции.

Последние версии [Flow](http://flowtype.org/) работают с проектами Create React App из коробки.

Чтобы добавить Flow в проект Create React App, выполните следующие действия:

1. Запустите `npm install --save flow-bin` (или `yarn add flow-bin`).
2. Добавьте `"flow": "flow"` в раздел `scripts` вашего` package.json`.
3. Запустите `npm run flow init` (или `yarn flow init`), чтобы создать [файл `.flowconfig`](https://flowtype.org/docs/advanced-configuration.html) в корневом каталоге.
4. Добавьте `// @flow` к любым файлам, которые вы хотите ввести проверку (например, в `src/App.js`).

Теперь вы можете запустить `npm run flow` (или `yarn flow`), чтобы проверить файлы на наличие ошибок типа.
При желании вы можете использовать IDE, например [Nuclide](https://nuclide.io/docs/languages/flow/), для лучшей интеграции.
В будущем мы планируем еще более тесно интегрировать его в приложение Create React.

Чтобы узнать больше о Flow, ознакомьтесь с [его документацией](https://flowtype.org/).

## Adding a Router

Create React не предписывает конкретное решение для маршрутизации, но [React Router](https://reacttraining.com/react-router/) является наиболее популярным.

Чтобы добавить его, запустите:

```sh
npm install --save react-router-dom
```

В качестве альтернативы можете использовать `yarn`:

```sh
yarn add react-router-dom
```

Чтобы попробовать, удалите весь код из `src/App.js` и замените его любым из примеров на его веб-сайте. 
[Базовый пример](https://reacttraining.com/react-router/web/example/basic) - хорошее место для начала.

Обратите внимание, что перед развёртыванием приложения [вам может потребоваться настроить рабочий сервер для поддержки маршрутизации на стороне клиента](#serving-apps-with-client-side-routing).

## Adding Custom Environment Variables

>Примечание: эта функция доступна в `react-scripts@0.2.3` и выше.

Ваш проект может использовать переменные, объявленные в вашей среде, как если бы они были объявлены локально в ваших JS-файлах.
По умолчанию для вас будет определен `NODE_ENV` и любые другие переменные среды, начинающиеся с `REACT_APP_`.

**Переменные среды внедряются во время сборки**. Поскольку приложение Create React создает статический пакет HTML/CSS/JS, он не может прочитать их во время выполнения.
Чтобы прочитать их во время выполнения, вам нужно будет загрузить HTML в память на сервере и заменить заполнители во время выполнения, как [описано здесь](#injecting-data-from-the-server-into-the-page). В качестве альтернативы вы можете перестроить приложение на сервере в любое время, когда вы их измените.

>Примечание. Вы должны создать пользовательские переменные среды, начинающиеся с `REACT_APP_`. Любые другие переменные, кроме `NODE_ENV`, будут проигнорированы во избежание случайного [раскрытия закрытого ключа на машине, который может иметь то же имя](https://github.com/facebookincubator/create-react-app/issues/865#issuecomment-252199527). Изменение любых переменных среды потребует перезапуска сервера разработки, если он работает.

Эти переменные среды будут определены для вас в `process.env`.
Например, переменная среды с именем `REACT_APP_SECRET_CODE` будет представлена ​​в вашем JS как `process.env.REACT_APP_SECRET_CODE`.

Также существует специальная встроенная переменная окружения под названием `NODE_ENV`. Вы можете прочитать его из `process.env.NODE_ENV`.
Когда вы запускаете `npm start`, он всегда равен `'development'`, когда вы запускаете `npm test`, он всегда равен `'test'`, а когда вы запускаете `npm run build` для создания рабочей среды bundle, он всегда равен `'production'`. **Вы не можете вручную переопределить `NODE_ENV`.**
Это предохраняет разработчиков от случайного развёртывания медленной разработки в рабочей среде.

Эти переменные среды могут быть полезны для условного отображения информации в зависимости от того, где развернут проект или использования конфиденциальных данных, находящихся вне контроля версий.

Во-первых, вам нужно определить переменные среды. Например, предположим, что вы хотите использовать секрет, определенный в среде внутри `<form>`:

```jsx
render() {
  return (
    <div>
      <small>Вы запускаете это приложение в режиме <b>{process.env.NODE_ENV}</b>.</small>
      <form>
        <input type="hidden" defaultValue={process.env.REACT_APP_SECRET_CODE} />
      </form>
    </div>
  );
}
```

Во время сборки `process.env.REACT_APP_SECRET_CODE` будет заменен текущим значением переменной среды `REACT_APP_SECRET_CODE`.
Помните, что переменная `NODE_ENV` будет установлена ​​для вас автоматически.

Когда вы загружаете приложение в браузер и просматриваете `<input>`, вы увидите, что для него установлено значение `abcdef`, а жирным шрифтом будет показана среда, предоставленная при использовании `npm start`:

```html
<div>
  <small>Вы запускаете это приложение в режиме <b>разработки</b>.</small>
  <form>
    <input type="hidden" value="abcdef" />
  </form>
</div>
```

Приведенная выше форма ищет переменную с именем `REACT_APP_SECRET_CODE` из среды.
Чтобы использовать это значение, нам нужно, чтобы оно было определено в среде.
Это можно сделать двумя способами: либо в вашей оболочке, либо в файле `.env`. Оба эти способа описаны в следующих нескольких разделах.

Наличие доступа к `NODE_ENV` также полезно для условного выполнения действий:

```js
if (process.env.NODE_ENV !== 'production') {
  analytics.disable();
}
```

Когда вы компилируете приложение с помощью `npm run build`, на этапе минификации это условие удаляется, и результирующий пакет будет меньше.

### Referencing Environment Variables in the HTML

>Примечание: эта функция доступна в `react-scripts@0.9.0` и выше.

Вы также можете получить доступ к переменным среды, начинающимся с `REACT_APP_` в файле `public/index.html`. Например:

```html
<title>%REACT_APP_WEBSITE_NAME%</title>
```

Обратите внимание, что применяются предостережения из приведенного выше раздела:

* Помимо нескольких встроенных переменных (`NODE_ENV` и `PUBLIC_URL`), имена переменных должны начинаться с `REACT_APP_` для работы.
* Переменные среды вводятся во время сборки. Если же вам нужно ввести их во время выполнения, [используйте этот подход](#generating-dynamic-meta-tags-on-the-server).

### Adding Temporary Environment Variables In Your Shell

Определение переменных среды может варьироваться в зависимости от ОС. Также важно знать, что этот способ временный, на время сеанса оболочки.

#### Windows (cmd.exe)

```cmd
set "REACT_APP_SECRET_CODE=abcdef" && npm start
```

(Примечание: кавычки вокруг присвоения переменной необходимы, чтобы избежать конечного пробела.)

#### Windows (Powershell)

```Powershell
($env:REACT_APP_SECRET_CODE = "abcdef") -and (npm start)
```

#### Linux, macOS (Bash)

```bash
REACT_APP_SECRET_CODE=abcdef npm start
```

### Adding Development Environment Variables In `.env`

> Примечание: эта функция доступна в `react-scripts@0.5.0` и выше.

Чтобы определить постоянные переменные среды, создайте файл с именем `.env` в корне вашего проекта:

```
REACT_APP_SECRET_CODE=abcdef
```
> Примечание: вы должны создавать собственные переменные среды, начинающиеся с `REACT_APP_`. Любые другие переменные, кроме `NODE_ENV`, будут проигнорированы, чтобы избежать [случайного раскрытия закрытого ключа на машине, у которого могло быть то же имя](https://github.com/facebookincubator/create-react-app/issues/865#issuecomment-252199527). Изменение любых переменных среды потребует перезапуска сервера разработки, если он работает.

Файлы `.env` **должны** проверяться в системе контроля версий (за исключением `.env*.local`).

#### What other `.env` files can be used?

> Примечание: эта функция **доступна с `react-scripts@1.0.0` и выше**.

* `.env`: Default.
* `.env.local`: Локальные переопределения. **Этот файл загружается для всех сред, кроме test.**
* `.env.development`, `.env.test`, `.env.production`: Настройки, зависящие от среды.
* `.env.development.local`, `.env.test.local`, `.env.production.local`: Локальное переопределение параметров среды.

Файлы слева имеют больший приоритет, чем файлы справа:

* `npm start`: `.env.development.local`, `.env.development`, `.env.local`, `.env`
* `npm run build`: `.env.production.local`, `.env.production`, `.env.local`, `.env`
* `npm test`: `.env.test.local`, `.env.test`, `.env` (примечание `.env.local` отсутствует)

Эти переменные будут действовать как значения по умолчанию, если машина не устанавливает их явно. <br>
Пожалуйста, обратитесь к [документации dotenv](https://github.com/motdotla/dotenv) для получения более подробной информации.

>Примечание. Если вы определяете переменные среды для разработки, вашему CI и/или платформе хостинга, скорее всего, потребуется чтобы они также были определены. Проконсультируйтесь с их документацией, как это сделать. Например, см. Документацию по [Travis CI](https://docs.travis-ci.com/user/environment-variables/) или [Heroku](https://devcenter.heroku.com/articles/config-vars).

#### Expanding Environment Variables In `.env`

> Примечание: эта функция доступна в `react-scripts@1.1.0` и выше.

Разверните переменные, уже имеющиеся на вашем компьютере, для использования в вашем файле `.env` (используя [dotenv-expand](https://github.com/motdotla/dotenv-expand)).

Например, чтобы получить переменную окружения `npm_package_version`:

```
REACT_APP_VERSION=$npm_package_version
# также работает:
# REACT_APP_VERSION=${npm_package_version}
```

Или разверните локальные переменные в текущем файле `.env`:

```
DOMAIN=www.example.com
REACT_APP_FOO=$DOMAIN/foo
REACT_APP_BAR=$DOMAIN/bar
```

## Can I Use Decorators?

Many popular libraries use [decorators](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841) in their documentation.<br>
Create React App doesn’t support decorator syntax at the moment because:
Многие популярные библиотеки используют в своей документации [декораторы](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841). <br>
Приложение Create React на данный момент не поддерживает синтаксис декоратора, потому что:

* Это экспериментальное предложение, которое может быть изменено.
* Текущая версия спецификации официально не поддерживается Babel.
* Если спецификация изменится, мы не сможем написать codemod, потому что мы не используем их внутри Facebook.

Однако во многих случаях вы можете переписать код, основанный на декораторах, без декораторов. <br>
Пожалуйста, обратитесь к этим двум потокам для справки:

* [#214](https://github.com/facebookincubator/create-react-app/issues/214)
* [#411](https://github.com/facebookincubator/create-react-app/issues/411)

Create React App добавит поддержку декораторов, когда спецификация перейдёт на стабильную стадию.

## Fetching Data with AJAX Requests

React не предписывает особого подхода к извлечению данных, но люди обычно используют либо библиотеку, например [axios](https://github.com/axios/axios), либо [`fetch()` API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), предоставляемый браузером. Удобно, что приложение Create React включает полифил для `fetch()`, так что вы можете использовать его, не беспокоясь о поддержке браузера.

Глобальная функция `fetch` позволяет легко делать запросы AJAX. Он принимает URL-адрес в качестве входных данных и возвращает обещание, которое преобразуется в объект `Response`. Вы можете найти дополнительную информацию о `fetch` [здесь](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

Этот проект также включает в себя [полифил Promise](https://github.com/then/promise), который обеспечивает полную реализацию Promises/A+.
Promise представляет собой конечный результат асинхронной операции, вы можете найти дополнительную информацию о Promises [здесь](https://www.promisejs.org/) и [здесь](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). 
И axios, и `fetch()` используют Promises под капотом. Вы также можете использовать синтаксис [`async / await`](https://davidwalsh.name/async-await), чтобы уменьшить вложенность обратных вызовов.

Вы можете узнать больше о выполнении запросов AJAX из компонентов React в [записях FAQ на веб-сайте React](https://reactjs.org/docs/faq-ajax.html).

## Integrating with an API Backend

Эти руководства помогут вам интегрировать ваше приложение с серверной частью API, работающей на другом порту,
используя `fetch()` для доступа к нему.

### Node
Посмотрите [это руководство](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/).
Вы можете найти сопутствующий репозиторий GitHub [здесь](https://github.com/fullstackreact/food-lookup-demo).

### Ruby on Rails

Посмотрите [это руководство](https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/).
Вы можете найти сопутствующий репозиторий GitHub [здесь](https://github.com/fullstackreact/food-lookup-demo-rails).

## Proxying API Requests in Development

> Примечание: эта функция доступна в `react-scripts@0.2.3` и выше.

Люди часто обслуживают клиентское приложение React с того же хоста и порта, что и их внутренняя реализация.<br>
Например, после развертывания приложения производственная установка может выглядеть так:

```
/             - статический сервер возвращает index.html с приложением React
/todos        - статический сервер возвращает index.html с приложением React
/api/todos    - сервер обрабатывает любые запросы /api/*, используя внутреннюю реализацию
```

Такая настройка **не** требуется. Однако, если у вас **есть** такая настройка, удобно писать запросы типа `fetch ('/api/todos')`, не беспокоясь о перенаправлении их на другой хост или порт во время разработки.

Чтобы указать серверу разработки проксировать любые неизвестные запросы к вашему серверу API в процессе разработки, добавьте поле `proxy` в ваш `package.json`, например:

```js
  "proxy": "http://localhost:4000",
```

Таким образом, когда вы `fetch('/api/todos')` в процессе разработки, сервер разработки распознает, что это не статический актив, и передаст ваш запрос на `http://localhost:4000/api/todos` как запасной вариант. Сервер разработки будет **только** пытаться отправлять запросы без `text/html` в заголовке `Accept` на прокси.

Удобно, что это позволяет избежать [проблем с CORS](http://stackoverflow.com/questions/21854516/understanding-ajax-cors-and-security-considerations) и подобных сообщений об ошибках в разработке:

```
Fetch API не может загрузить http://localhost:4000/api/todos. На запрошенном ресурсе отсутствует заголовок 'Access-Control-Allow-Origin'. Поэтому к источнику 'http://localhost:3000' доступ запрещен. Если непрозрачный ответ соответствует вашим потребностям, установите режим запроса на 'no-cors', чтобы получить ресурс с отключенным CORS.
```

Имейте в виду, что `proxy` действует только при разработке (с `npm start`), и вы должны убедиться, что URL-адреса, такие как `/api/todos`, указывают на правильную вещь в рабочей среде. Вам не нужно использовать префикс `/api`. Любой нераспознанный запрос без заголовка accept `text/html` будет перенаправлен на указанный `proxy`.

Опция `proxy` поддерживает соединения HTTP, HTTPS и WebSocket.<br>
Если опция `proxy` **недостаточна** для вашей гибкости, вы можете также:

* [Настроить прокси самостоятельно](#configuring-the-proxy-manually)
* Включить CORS на своем сервере ([вот как это сделать для Express](http://enable-cors.org/server_expressjs.html)).
* Использовать [переменные среды](#adding-custom-environment-variables), чтобы добавить правильный хост и порт сервера в ваше приложение.

### "Invalid Host Header" Errors After Configuring Proxy

Когда вы включаете опцию `proxy`, вы выбираете более строгий набор проверок хоста. Это необходимо, потому что если оставить серверную часть открытой для удаленных хостов, ваш компьютер станет уязвимым для атак повторного связывания DNS. Проблема объясняется в [этой статье](https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a) и [в этом выпуске](https://github.com/webpack/webpack-dev-server/issues/887).

Это не должно влиять на вас при разработке на `localhost`, но если вы разрабатываете удаленно, как [описано здесь](https://github.com/facebookincubator/create-react-app/issues/2271), вы увидите эту ошибку в браузере после включения опции `proxy`:

>Недействительный заголовок хоста

Чтобы обойти это, вы можете указать свой общедоступный хост разработки в файле с именем `.env.development` в корне вашего проекта:

```
HOST=mypublicdevhost.com
```

Если вы сейчас перезапустите сервер разработки и загрузите приложение с указанного хоста, оно должно работать.

Если у вас все еще есть проблемы или вы используете более экзотическую среду, например облачный редактор, вы можете полностью обойти проверку хоста, добавив строку в `.env.development.local`. 
**Обратите внимание, что это опасно и подвергает ваш компьютер удаленному выполнению кода с вредоносных веб-сайтов:**

```
# ПРИМЕЧАНИЕ: ЭТО ОПАСНО!
# Он подвергает вашу машину атакам с посещаемых вами веб-сайтов.
DANGEROUSLY_DISABLE_HOST_CHECK=true
```

Мы не рекомендуем такой подход.

### Configuring the Proxy Manually

>Примечание: эта функция доступна в `react-scripts@1.0.0` и выше.

Если опция `proxy` **не** достаточно гибкая для вас, вы можете указать объект в следующей форме (в `package.json`).<br>
Вы также можете указать любое значение конфигурации [`http-proxy-middleware`](https://github.com/chimurai/http-proxy-middleware#options) или [`http-proxy`](https://github.com/nodejitsu/node-http-proxy#options) поддерживает.
```js
{
  // ...
  "proxy": {
    "/api": {
      "target": "<url>",
      "ws": true
      // ...
    }
  }
  // ...
}
```

Все запросы, соответствующие этому пути, будут прокси, без исключений. Это включает запросы на `text/html`, которые стандартный параметр `proxy` не прокси не выполняет.

Если вам нужно указать несколько прокси, вы можете сделать это, указав дополнительные записи.
Совпадения - это регулярные выражения, поэтому вы можете использовать регулярное выражение для сопоставления нескольких путей.
```js
{
  // ...
  "proxy": {
    // Соответствует любому запросу, начинающемуся с /api
    "/api": {
      "target": "<url_1>",
      "ws": true
      // ...
    },
    // Соответствует любому запросу, начинающемуся с /foo
    "/foo": {
      "target": "<url_2>",
      "ssl": true,
      "pathRewrite": {
        "^/foo": "/foo/beta"
      }
      // ...
    },
    // Соответствует /bar/abc.html, но не /bar/sub/def.html
    "/bar/[^/]*[.]html": {
      "target": "<url_3>",
      // ...
    },
    // Соответствует /baz/abc.html и /baz/sub/def.html
    "/baz/.*/.*[.]html": {
      "target": "<url_4>"
      // ...
    }
  }
  // ...
}
```

### Configuring a WebSocket Proxy

При настройке прокси-сервера WebSocket необходимо учитывать некоторые дополнительные соображения.

Если вы используете механизм WebSocket, например [Socket.io](https://socket.io/), у вас должен быть запущен сервер Socket.io, который можно использовать в качестве цели прокси. Socket.io не будет работать со стандартным сервером WebSocket. В частности, не ожидайте, что Socket.io будет работать с [эхо-тест websocket.org](http://websocket.org/echo.html).

Есть хорошая документация по [настройке сервера Socket.io](https://socket.io/docs/).

Стандартные WebSockets ** будут ** работать со стандартным сервером WebSocket, а также с эхо-тестом websocket.org. Вы можете использовать библиотеки, такие как [ws](https://github.com/websockets/ws) для сервера, с [родными WebSockets в браузере](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket).

В любом случае вы можете вручную проксировать запросы WebSocket в `package.json`:

```js
{
  // ...
  "proxy": {
    "/socket": {
      // Ваш совместимый сервер WebSocket
      "target": "ws://<socket_url>",
      // Сообщите http-proxy-middleware, что это прокси WebSocket.
      // Также позволяет проксировать запросы WebSocket без дополнительного HTTP-запроса.
      // https://github.com/chimurai/http-proxy-middleware#external-websocket-upgrade
      "ws": true
      // ...
    }
  }
  // ...
}
```

## Using HTTPS in Development

>Примечание: эта функция доступна в `react-scripts@0.4.0` и выше.

Вам может потребоваться, чтобы сервер разработки обслуживал страницы по HTTPS. Одним из конкретных случаев, когда это может быть полезно, является использование [функции «прокси»](#proxying-api-requests-in-development) для прокси-запросов к серверу API, когда этот сервер API сам обслуживает HTTPS.

Для этого установите для переменной среды `HTTPS` значение `true`, затем запустите сервер разработки, как обычно, с помощью `npm start`:

#### Windows (cmd.exe)

```cmd
set HTTPS=true&&npm start
```

#### Windows (Powershell)

```Powershell
($env:HTTPS = $true) -and (npm start)
```

(Примечание: отсутствие пробелов намеренно.)

#### Linux, macOS (Bash)

```bash
HTTPS=true npm start
```

Обратите внимание, что сервер будет использовать самозаверяющий сертификат, поэтому ваш веб-браузер почти наверняка отобразит предупреждение при доступе к странице.

## Generating Dynamic `<meta>` Tags on the Server

Поскольку приложение Create React не поддерживает рендеринг на сервере, вам может быть интересно, как сделать теги `<meta>` динамическими и отражать текущий URL. 
Чтобы решить эту проблему, мы рекомендуем добавлять заполнители в HTML, например:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta property="og:title" content="__OG_TITLE__">
    <meta property="og:description" content="__OG_DESCRIPTION__">
```

Затем на сервере, независимо от используемого вами бэкенда, вы можете прочитать `index.html` в память и заменить `__OG_TITLE__`, `__OG_DESCRIPTION__` и любые другие заполнители значениями, зависящими от текущего URL. Просто не забудьте очистить и экранировать интерполированные значения, чтобы их можно было безопасно встраивать в HTML!

Если вы используете сервер Node, вы даже можете совместно использовать логику сопоставления маршрутов между клиентом и сервером. Однако его дублирование также отлично работает и в простых случаях.

## Pre-Rendering into Static HTML Files

Если вы размещаете свою сборку у статического хостинг-провайдера, вы можете использовать [react-snapshot](https://www.npmjs.com/package/react-snapshot) или [react-snap](https://github.com/stereobooster/react-snap) для создания HTML-страниц для каждого маршрута или относительной ссылки в вашем приложении. Эти страницы затем станут активными или «гидратированными» после загрузки пакета JavaScript.

Есть также возможности использовать это вне статического хостинга, чтобы снять нагрузку с сервера при создании и кэшировании маршрутов.

Основным преимуществом предварительного рендеринга является то, что вы получаете основное содержимое каждой страницы _с_ полезными данными HTML - независимо от того, успешно ли загружается ваш пакет JavaScript. Это также увеличивает вероятность того, что каждый маршрут вашего приложения будет обнаружен поисковыми системами.

Вы можете узнать больше о [предварительной визуализации с нулевой конфигурацией (также называемой моментальным снимком) здесь](https://medium.com/superhighfives/an-almost-static-stack-6df0a2791319).

## Injecting Data from the Server into the Page

Как и в предыдущем разделе, вы можете оставить в HTML несколько заполнителей, которые вводят глобальные переменные, например:

```js
<!doctype html>
<html lang="en">
  <head>
    <script>
      window.SERVER_DATA = __SERVER_DATA__;
    </script>
```

Then, on the server, you can replace `__SERVER_DATA__` with a JSON of real data right before sending the response. The client code can then read `window.SERVER_DATA` to use it. **Make sure to [sanitize the JSON before sending it to the client](https://medium.com/node-security/the-most-common-xss-vulnerability-in-react-js-applications-2bdffbcc1fa0) as it makes your app vulnerable to XSS attacks.**
Затем на сервере вы можете заменить `__SERVER_DATA__` на JSON реальных данных прямо перед отправкой ответа. Затем клиентский код может прочитать `window.SERVER_DATA`, чтобы использовать его. **Обязательно [очистите JSON перед его отправкой клиенту](https://medium.com/node-security/the-most-common-xss-vulnerability-in-react-js-applications-2bdffbcc1fa0) поскольку он делает ваше приложение уязвимым для XSS-атак.**

## Running Tests

> Примечание: эта функция доступна в `react-scripts@0.3.0` и выше. <br>
> [Прочтите руководство по миграции, чтобы узнать, как включить его в старых проектах!](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md#migrating-from-023-to-030)

Приложение Create React использует [Jest](https://facebook.github.io/jest/) в качестве средства запуска тестов. Чтобы подготовиться к этой интеграции, мы провели [серьезную переработку](https://facebook.github.io/jest/blog/2016/09/01/jest-15.html) Jest, поэтому, если вы слышали об этом плохие отзывы много лет назад, попробуйте ещё раз.

Jest - это раннер на основе узлов. Это означает, что тесты всегда выполняются в среде Node, а не в реальном браузере. Это позволяет нам обеспечить высокую скорость итераций и предотвратить нестабильность.

Хотя Jest предоставляет глобальные переменные браузера, такие как `window`, благодаря [jsdom](https://github.com/tmpvar/jsdom), они являются лишь приближением реального поведения браузера. Jest предназначен для модульных тестов вашей логики и компонентов, а не для причуд DOM.

Мы рекомендуем вам использовать отдельный инструмент для сквозных тестов браузера, если они вам нужны. Они выходят за рамки приложения Create React.

### Filename Conventions

Jest будет искать тестовые файлы с любым из следующих популярных соглашений об именах:

* Файлы с суффиксом `.js` в папках `__tests__`.
* Файлы с суффиксом `.test.js`.
* Файлы с суффиксом `.spec.js`.

Файлы `.test.js` / `.spec.js` (или папки `__tests__`) могут быть расположены на любой глубине в папке верхнего уровня `src`.

Мы рекомендуем помещать тестовые файлы (или папки `__tests__`) рядом с кодом, который они тестируют, чтобы относительный импорт казался короче. Например, если `App.test.js` и `App.js` находятся в одной папке, тесту просто нужно `импортировать приложение из './App'` вместо длинного относительного пути. Совместное размещение также помогает быстрее находить тесты в более крупных проектах.

### Command Line Interface

Когда вы запускаете `npm test`, Jest запускается в режиме часов. Каждый раз, когда вы сохраняете файл, он будет повторно запускать тесты, так же как `npm start` перекомпилирует код.

Наблюдатель включает интерактивный интерфейс командной строки с возможностью запускать все тесты или фокусироваться на шаблоне поиска. Он разработан таким образом, чтобы вы могли держать его открытым и наслаждаться быстрым повторным запуском. Вы можете узнать команды из заметки «Наблюдать за использованием», которую наблюдатель печатает после каждого запуска:

![Режим часов Jest](http://facebook.github.io/jest/img/blog/15-watch.gif)

### Version Control Integration

По умолчанию, когда вы запускаете `npm test`, Jest запускает только тесты, относящиеся к файлам, измененным с момента последней фиксации. Это оптимизация, призванная ускорить выполнение ваших тестов независимо от того, сколько у вас тестов. Однако предполагается, что вы не часто фиксируете код, не прошедший тесты.

Jest всегда явно упоминает, что он запускал только тесты, связанные с файлами, измененными с момента последней фиксации. Вы также можете нажать `a` в режиме просмотра, чтобы Jest запускал все тесты.

Jest всегда будет запускать все тесты на сервере [непрерывной интеграции](#continuous-integration) или если проект не находится внутри репозитория Git или Mercurial.

### Writing Tests

Для создания тестов добавьте блоки `it()` (или `test()`) с именем теста и его кодом. Вы можете при желании заключить их в блоки `describe()` для логической группировки, но это не требуется и не рекомендуется.

Jest предоставляет встроенную глобальную функцию `expect()` для создания утверждений. Базовый тест может выглядеть так:

```js
import sum from './sum';

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
```

Все сопоставители `expect()`, поддерживаемые Jest, [подробно описаны здесь](https://facebook.github.io/jest/docs/en/expect.html#content).<br>
Вы также можете использовать [`jest.fn()` и `expect(fn).toBeCalled()`](https://facebook.github.io/jest/docs/en/expect.html#tohavebeencalled) для создания «шпионов» или имитаторов функции.

### Testing Components

Существует широкий спектр методов тестирования компонентов. Они варьируются от «дымового теста», подтверждающего, что компонент отображается без выброса, до поверхностного рендеринга и тестирования некоторых выходных данных, до полного рендеринга и тестирования жизненного цикла компонента и изменений состояния.

В разных проектах выбираются разные компромиссы при тестировании в зависимости от того, как часто меняются компоненты и сколько логики они содержат. Если вы еще не определились со стратегией тестирования, рекомендуем начать с создания простых дымовых тестов для ваших компонентов:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
```

Этот тест монтирует компонент и проверяет, не сработал ли он во время рендеринга. Подобные тесты приносят большую пользу при минимальных усилиях, поэтому они отлично подходят в качестве отправной точки, и этот тест вы найдете в `src/App.test.js`.

Когда вы столкнетесь с ошибками, вызванными изменением компонентов, вы получите более глубокое понимание того, какие из них стоит протестировать в вашем приложении. Возможно, сейчас самое время представить более конкретные тесты, подтверждающие конкретный ожидаемый результат или поведение.

Если вы хотите протестировать компоненты отдельно от дочерних компонентов, которые они отображают, мы рекомендуем использовать [`shallow()` API рендеринга](http://airbnb.io/enzyme/docs/api/shallow.html) из [Фермент](http://airbnb.io/enzyme/). Чтобы установить его, запустите:

```sh
npm install --save enzyme enzyme-adapter-react-16 react-test-renderer
```

В качестве альтернативы вы можете использовать `yarn`:

```sh
yarn add enzyme enzyme-adapter-react-16 react-test-renderer
```

Начиная с Enzyme 3, вам нужно будет установить Enzyme вместе с адаптером, соответствующим используемой вами версии React. (В приведенных выше примерах используется адаптер для React 16.)

Адаптер также необходимо настроить в вашем [файле глобальной настройки](#initializing-test-environment):

#### `src/setupTests.js`
```js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

>Note: Keep in mind that if you decide to "eject" before creating `src/setupTests.js`, the resulting `package.json` file won't contain any reference to it. [Read here](#initializing-test-environment) to learn how to add this after ejecting.
>Примечание: имейте в виду, что если вы решите «извлечь» перед созданием `src/setupTests.js`, полученный файл `package.json` не будет содержать на него никаких ссылок. [Прочтите здесь](#initializing-test-environment), чтобы узнать, как добавить это после извлечения.
Теперь вы можете написать с ним дымовой тест:

```js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});
```

В отличие от предыдущего дымового теста с использованием `ReactDOM.render()`, этот тест отображает только `<App>` и не углубляется. Например, даже если `<App>` сам отображает `<Button>`, который выдает, этот тест будет пройден. Неглубокий рендеринг отлично подходит для изолированных модульных тестов, но вы все равно можете создать несколько полных тестов рендеринга, чтобы гарантировать правильную интеграцию компонентов. Enzyme поддерживает [полный рендеринг с помощью `mount()`](http://airbnb.io/enzyme/docs/api/mount.html), и вы также можете использовать его для тестирования изменений состояния и жизненного цикла компонентов.

Вы можете прочитать [Документацию по ферментам](http://airbnb.io/enzyme/), чтобы узнать о других методах тестирования. В документации по Enzyme для утверждений используются Chai и Sinon, но вам не обязательно их использовать, потому что Jest предоставляет встроенные функции `expect()` и `jest.fn()` для шпионов.

Вот пример из документации Enzyme, который утверждает конкретный вывод, переписанный для использования сопоставителей Jest:

```js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Добро пожаловать в React</h2>;
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
```

Все сопоставители Jest [подробно описаны здесь](http://facebook.github.io/jest/docs/en/expect.html).<br>
Тем не менее, вы можете использовать стороннюю библиотеку утверждений, такую ​​как [Chai](http://chaijs.com/), если хотите, как описано ниже.

Additionally, you might find [jest-enzyme](https://github.com/blainekasten/enzyme-matchers) helpful to simplify your tests with readable matchers. The above `contains` code can be written more simply with jest-enzyme.
Кроме того, вы можете найти [jest-enzyme](https://github.com/blainekasten/enzyme-matchers) полезным для упрощения ваших тестов с помощью удобочитаемых сопоставителей. Вышеупомянутый код `contains` можно написать более просто с помощью jest-enzyme.

```js
expect(wrapper).toContainReact(welcome)
```

Чтобы включить это, установите `jest-enzyme`:

```sh
npm install --save jest-enzyme
```

В качестве альтернативы вы можете использовать `yarn`:

```sh
yarn add jest-enzyme
```

Импортируйте его в [`src/setupTests.js`](#initializing-test-environment), чтобы сделать его сопоставители доступными в каждом тесте:

```js
import 'jest-enzyme';
```

### Using Third Party Assertion Libraries

Мы рекомендуем вам использовать `expect()` для утверждений и `jest.fn()` для шпионов. Если у вас возникли проблемы с ними, пожалуйста, [подавите их против Jest](https://github.com/facebook/jest/issues/new), и мы их исправим. Мы намерены и дальше улучшать их для React, поддерживая, например, [красивую печать элементов React как JSX](https://github.com/facebook/jest/pull/1566).

However, if you are used to other libraries, such as [Chai](http://chaijs.com/) and [Sinon](http://sinonjs.org/), or if you have existing code using them that you’d like to port over, you can import them normally like this:
Однако, если вы привыкли к другим библиотекам, таким как [Chai](http://chaijs.com/) и [Sinon](http://sinonjs.org/), или если у вас есть существующий код, использующий их, вы хотите перенести, вы можете импортировать их обычно следующим образом:

```js
import sinon from 'sinon';
import { expect } from 'chai';
```

а затем используйте их в своих тестах, как обычно.

### Initializing Test Environment

> Примечание: эта функция доступна в `react-scripts@0.4.0` и выше.

Если ваше приложение использует API-интерфейс браузера, который вам нужно имитировать в своих тестах, или если вам просто нужна глобальная настройка перед запуском тестов, добавьте в свой проект файл `src/setupTests.js`. Он будет автоматически выполнен перед запуском ваших тестов.

Например:

#### `src/setupTests.js`
```js
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock
```

>Примечание: имейте в виду, что если вы решите «извлечь» перед созданием `src/setupTests.js`, полученный файл `package.json` не будет содержать ссылки на него, поэтому вам следует вручную создать свойство `setupTestFrameworkScriptFile` в конфигурации для Jest примерно следующее:

>```js
>"jest": {
>   // ...
>   "setupTestFrameworkScriptFile": "<rootDir>/src/setupTests.js"
>  }
>  ```

### Focusing and Excluding Tests

Вы можете заменить `it()` на `xit()`, чтобы временно исключить выполнение теста.<br>
Точно так же `fit()` позволяет вам сосредоточиться на конкретном тесте без запуска каких-либо других тестов.

### Coverage Reporting

Jest имеет встроенный репортер покрытия, который хорошо работает с ES6 и не требует настройки. <br>
Запустите `npm test -- --coverage` (обратите внимание на дополнительный `--` посередине), чтобы включить такой отчет о покрытии:

![отчёт о покрытии](http://i.imgur.com/5bFhnTS.png)

Обратите внимание, что тесты выполняются намного медленнее с покрытием, поэтому рекомендуется запускать его отдельно от обычного рабочего процесса.

#### Configuration

Конфигурацию покрытия Jest по умолчанию можно изменить, добавив любой из следующих поддерживаемых ключей в конфигурацию Jest в вашем package.json.

Поддерживаемые переопределения:
 - [`collectCoverageFrom`](https://facebook.github.io/jest/docs/en/configuration.html#collectcoveragefrom-array)
 - [`coverageReporters`](https://facebook.github.io/jest/docs/en/configuration.html#coveragereporters-array-string)
 - [`coverageThreshold`](https://facebook.github.io/jest/docs/en/configuration.html#coveragethreshold-object)
 - [`snapshotSerializers`](https://facebook.github.io/jest/docs/en/configuration.html#snapshotserializers-array-string)

Пример package.json:

```json
{
  "name": "your-package",
  "jest": {
    "collectCoverageFrom" : [
      "src/**/*.{js,jsx}",
      "!<rootDir>/node_modules/",
      "!<rootDir>/path/to/dir/"
    ],
    "coverageThreshold": {
      "global": {
        "branches": 90,
        "functions": 90,
        "lines": 90,
        "statements": 90
      }
    },
    "coverageReporters": ["text"],
    "snapshotSerializers": ["my-serializer-module"]
  }
}
```

### Continuous Integration

По умолчанию npm test запускает наблюдатель с интерактивным интерфейсом командной строки. Однако вы можете принудительно запустить тесты один раз и завершить процесс, установив переменную среды с именем `CI`.

При создании сборки вашего приложения с помощью `npm run build` предупреждения линтера по умолчанию не проверяются. Как и `npm test`, вы можете заставить сборку выполнять проверку предупреждений линтера, установив переменную среды `CI`. Если возникают какие-либо предупреждения, сборка завершается ошибкой.

Популярные CI-серверы уже устанавливают переменную окружения `CI` по умолчанию, но вы тоже можете сделать это самостоятельно:

### On CI servers
#### Travis CI

1. Следуя руководству [Начало работы с Трэвисом](https://docs.travis-ci.com/user/getting-started/) по синхронизации репозитория GitHub с Трэвисом. Возможно, вам придется вручную инициализировать некоторые настройки на странице вашего [профиля](https://travis-ci.org/profile).
1. Добавьте файл `.travis.yml` в свой репозиторий git.
```
language: node_js
node_js:
  - 6
cache:
  directories:
    - node_modules
script:
  - npm run build
  - npm test
```
1. Запустите первую сборку с помощью git push.
1. [Настройте свою сборку Travis CI](https://docs.travis-ci.com/user/customizing-the-build/) если нужно.

#### CircleCI

Follow [this article](https://medium.com/@knowbody/circleci-and-zeits-now-sh-c9b7eebcd3c1) to set up CircleCI with a Create React App project.
Следуйте [этой статье](https://medium.com/@knowbody/circleci-and-zeits-now-sh-c9b7eebcd3c1), чтобы настроить CircleCI с проектом Create React App.

### On your own environment
##### Windows (cmd.exe)

```cmd
set CI=true&&npm test
```

```cmd
set CI=true&&npm run build
```

(Примечание: отсутствие пробелов намеренно.)

##### Windows (Powershell)

```Powershell
($env:CI = $true) -and (npm test)
```

```Powershell
($env:CI = $true) -and (npm run build)
```

##### Linux, macOS (Bash)

```bash
CI=true npm test
```

```bash
CI=true npm run build
```

Команда test заставит Jest запустить тесты один раз вместо запуска наблюдателя.

>  If you find yourself doing this often in development, please [file an issue](https://github.com/facebookincubator/create-react-app/issues/new) to tell us about your use case because we want to make watcher the best experience and are open to changing how it works to accommodate more workflows.
> Если вы часто делаете это в процессе разработки, пожалуйста [сообщите о проблеме](https://github.com/facebookincubator/create-react-app/issues/new), чтобы рассказать нам о своем варианте использования, потому что мы хотим сделать наблюдение за лучшим опытом и готовы изменить его работу, чтобы приспособить больше рабочих процессов.

Команда сборки проверит предупреждения линтера и завершится ошибкой, если они будут обнаружены.

### Disabling jsdom

По умолчанию `package.json` сгенерированного проекта выглядит так:

```js
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom"
```

If you know that none of your tests depend on [jsdom](https://github.com/tmpvar/jsdom), you can safely remove `--env=jsdom`, and your tests will run faster:
Если вы знаете, что ни один из ваших тестов не зависит от [jsdom](https://github.com/tmpvar/jsdom), вы можете безопасно удалить `--env=jsdom`, и ваши тесты будут работать быстрее:

```diff
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
-   "test": "react-scripts test --env=jsdom"
+   "test": "react-scripts test"
```

Чтобы помочь вам принять решение, вот список API, которым **нужен jsdom**:

* Любые глобальные файлы браузера, такие как `window` и `document`
* [`ReactDOM.render()`](https://facebook.github.io/react/docs/top-level-api.html#reactdom.render)
* [`TestUtils.renderIntoDocument()`](https://facebook.github.io/react/docs/test-utils.html#renderintodocument) ([ярлык](https://github.com/facebook/react/blob/34761cf9a252964abfaab6faf74d473ad95d1f21/src/test/ReactTestUtils.js#L83-L91) для вышеуказанного)
* [`mount()`](http://airbnb.io/enzyme/docs/api/mount.html) в [Enzyme](http://airbnb.io/enzyme/index.html)

Напротив, **jsdom не требуется** для следующих API:

* [`TestUtils.createRenderer()`](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering) (неглубокий рендеринг)
* [`shallow()`](http://airbnb.io/enzyme/docs/api/shallow.html) в [Enzyme](http://airbnb.io/enzyme/index.html)

Наконец, jsdom также не нужен для [тестирования снимков](http://facebook.github.io/jest/blog/2016/07/27/jest-14.html).

### Snapshot Testing

Тестирование моментальных снимков - это функция Jest, которая автоматически генерирует текстовые снимки ваших компонентов и сохраняет их на диске, поэтому при изменении вывода пользовательского интерфейса вы получаете уведомление, не записывая вручную никаких утверждений в выводе компонента. [Подробнее о тестировании снимков.](http://facebook.github.io/jest/blog/2016/07/27/jest-14.html)

### Editor Integration

Если вы используете [Visual Studio Code](https://code.visualstudio.com), есть [расширение Jest](https://github.com/orta/vscode-jest), которое работает с приложением Create React из коробки. Это обеспечивает множество функций, подобных IDE, при использовании текстового редактора: отображение состояния тестового прогона с сообщениями о потенциальных сбоях в строке, автоматический запуск и остановка наблюдателя и предложение обновлений моментальных снимков одним щелчком мыши.

![VS Code - предпросмотр](https://cloud.githubusercontent.com/assets/49038/20795349/a032308a-b7c8-11e6-9b34-7eeac781003f.png)

## Debugging Tests

Есть разные способы настроить отладчик для ваших тестов Jest. Мы рассматриваем отладку в Chrome и [Visual Studio Code](https://code.visualstudio.com/).

>Примечание: для отладки тестов требуется Node 8 или выше.

### Debugging Tests in Chrome

Добавьте следующее в раздел `scripts` в вашем проекте `package.json`
```json
"scripts": {
    "test:debug": "react-scripts --inspect-brk test --runInBand --env=jsdom"
  }
```
Поместите операторы `debugger;` в любой тест и запустите:
```bash
$ npm run test:debug
```

Это запустит ваши тесты Jest, но сделайте паузу перед выполнением, чтобы отладчик мог подключиться к процессу.

Откройте следующее в Chrome
```
about:inspect
```

После перехода по этой ссылке отобразятся Инструменты разработчика Chrome. Выберите `inspect` в своем процессе, и точка останова будет установлена ​​в первой строке сценария реакции (это делается просто для того, чтобы дать вам время открыть инструменты разработчика и предотвратить выполнение Jest до того, как у вас будет время для этого). Нажмите кнопку, которая выглядит как кнопка «воспроизведения» в верхнем правом углу экрана, чтобы продолжить выполнение. Когда Jest выполняет тест, содержащий оператор отладчика, выполнение приостанавливается, и вы можете проверить текущую область видимости и стек вызовов.

>Примечание: параметр --runInBand cli гарантирует, что Jest запускает тест в одном процессе, а не порождает процессы для отдельных тестов. Обычно Jest распараллеливает прогоны тестов между процессами, но отлаживать несколько процессов одновременно сложно.

### Debugging Tests in Visual Studio Code

Отладка тестов Jest "из коробки" поддерживается для [Visual Studio Code](https://code.visualstudio.com).

Используйте следующий файл конфигурации [`launch.json`](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations):
```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug CRA Tests",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",      
      "args": [
        "test",
        "--runInBand",
        "--no-cache",
        "--env=jsdom"
      ],
      "cwd": "${workspaceRoot}",
      "protocol": "inspector",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```

## Developing Components in Isolation

Обычно в приложении есть много компонентов пользовательского интерфейса, и каждый из них имеет много разных состояний.
Например, простой компонент кнопки может иметь следующие состояния:

* В штатном состоянии с текстовой меткой.
* В отключенном режиме.
* В состоянии загрузки.

Обычно эти состояния трудно увидеть, не запустив образец приложения или несколько примеров.

Приложение Create React по умолчанию не содержит никаких инструментов для этого, но вы можете легко добавить [Storybook for React](https://storybook.js.org) ([source](https://github.com/storybooks/storybook)) или [React Styleguidist](https://react-styleguidist.js.org/) ([source](https://github.com/styleguidist/react-styleguidist)) в свой проект. **Это сторонние инструменты, которые позволяют разрабатывать компоненты и видеть все их состояния отдельно от вашего приложения**.

![Storybook for React Demo](http://i.imgur.com/7CIAWpB.gif)

Вы также можете развернуть свой сборник рассказов или руководство по стилю как статическое приложение. Таким образом, каждый в вашей команде может просматривать и проверять различные состояния компонентов пользовательского интерфейса без запуска внутреннего сервера или создания учетной записи в вашем приложении.

### Getting Started with Storybook

Storybook - это среда разработки для компонентов React UI. Он позволяет вам просматривать библиотеку компонентов, просматривать различные состояния каждого компонента, а также в интерактивном режиме разрабатывать и тестировать компоненты.

Сначала установите глобально следующий пакет npm:

```sh
npm install -g @storybook/cli
```

Затем выполните следующую команду в каталоге вашего приложения:

```sh
getstorybook
```

После этого следуйте инструкциям на экране.

Узнайте больше о React Storybook:

* Скринкаст: [Начало работы с React Storybook](https://egghead.io/lessons/react-getting-started-with-react-storybook)
* [GitHub Repo](https://github.com/storybooks/storybook)
* [Документация](https://storybook.js.org/basics/introduction/)
* [Тест снимков UI](https://github.com/storybooks/storybook/tree/master/addons/storyshots) with Storybook + addon/storyshot

### Getting Started with Styleguidist

Styleguidist сочетает в себе руководство по стилю, где все ваши компоненты представлены на одной странице с их документацией по реквизитам и примерами использования, со средой для изолированной разработки компонентов, аналогичной Storybook. В Styleguidist вы пишете примеры в Markdown, где каждый фрагмент кода отображается в виде живой редактируемой площадки.

Сначала установите Styleguidist:

```sh
npm install --save react-styleguidist
```

В качестве альтернативы можете использовать `yarn`:

```sh
yarn add react-styleguidist
```

Затем добавьте эти сценарии в ваш `package.json`:

```diff
   "scripts": {
+    "styleguide": "styleguidist server",
+    "styleguide:build": "styleguidist build",
     "start": "react-scripts start",
```

Затем выполните следующую команду в каталоге вашего приложения:

```sh
npm run styleguide
```

После этого следуйте инструкциям на экране.

Узнайте больше о React Styleguidist:

* [GitHub Repo](https://github.com/styleguidist/react-styleguidist)
* [Документация](https://react-styleguidist.js.org/docs/getting-started.html)

## Publishing Components to npm

Create React App doesn't provide any built-in functionality to publish a component to npm. If you're ready to extract a component from your project so other people can use it, we recommend moving it to a separate directory outside of your project and then using a tool like [nwb](https://github.com/insin/nwb#react-components-and-libraries) to prepare it for publishing.
Приложение Create React не предоставляет встроенных функций для публикации компонента в npm. Если вы готовы извлечь компонент из своего проекта, чтобы другие люди могли его использовать, мы рекомендуем переместить его в отдельный каталог вне вашего проекта, а затем использовать такой инструмент, как [nwb](https://github.com/insin/nwb#react-components-and-libraries), чтобы подготовить его к публикации.

## Making a Progressive Web App

По умолчанию производственная сборка является полностью функциональной, сначала автономной.
[Прогрессивное веб-приложение](https://developers.google.com/web/progressive-web-apps/).

Прогрессивные веб-приложения быстрее и надежнее традиционных веб-страниц, а также обеспечивают удобство работы на мобильных устройствах:

 * Все статические ресурсы сайта кэшируются, поэтому ваша страница быстро загружается при последующих посещениях, независимо от подключения к сети (например, 2G или 3G). Обновления загружаются в фоновом режиме.
 * Ваше приложение будет работать независимо от состояния сети, даже если оно отключено. Это означает, что ваши пользователи смогут использовать ваше приложение на высоте 10 000 футов и в метро.
 * На мобильных устройствах ваше приложение можно добавить прямо на главный экран пользователя, на значок приложения и все остальное. Вы также можете повторно привлечь пользователей с помощью веб-**push-уведомлений**. Это устраняет необходимость в магазине приложений.

[`Sw-precache-webpack-plugin`](https://github.com/goldhand/sw-precache-webpack-plugin)
интегрирован в рабочую конфигурацию, и он позаботится о создании файла сервис-воркера, который автоматически
предварительно кэширует все свои локальные ресурсы и поддерживает их в актуальном состоянии по мере развертывания обновлений.
Сервисный работник будет использовать [стратегию первого кеширования](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network) для обработки всех запросов на локальные ресурсы, включая исходный HTML-код, обеспечивая надежную работу вашего веб-приложения даже в медленной или ненадежной сети.

### Opting Out of Caching

Если вы предпочитаете не включать сервис-воркеров до первоначального производственного развертывания, удалите вызов `registerServiceWorker ()` из [`src/index.js`](src/index.js).

Если вы ранее включили сервис-воркеров в своем производственном развертывании и решили, что хотите отключить их для всех существующих пользователей, вы можете заменить вызов `registerServiceWorker()` в [`src/index.js`](src/index.js), сначала изменив импорт сервис-воркера:
```javascript
import { unregister } from './registerServiceWorker';
```
а затем вместо этого вызовите `unregister()`. После того как пользователь посетит страницу, на которой есть `unregister()`, сервисный работник будет удален. Обратите внимание, что в зависимости от того, как обслуживается `/service-worker.js`, аннулирование кеша может занять до 24 часов.

### Offline-First Considerations

1. Сервисным работникам [требуется HTTPS](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers#you_need_https), хотя для облегчения локального тестирования эта политика [не применяется к `localhost`](http://stackoverflow.com/questions/34160509/options-for-testing-service-workers-via-http/34161385#34161385).
Если ваш производственный веб-сервер не поддерживает HTTPS, регистрация сервис-воркера не удастся, но остальная часть вашего веб-приложения останется работоспособной.

1. Рабочие службы [в настоящее время не поддерживаются](https://jakearchibald.github.io/isserviceworkerready/) во всех веб-браузерах.
Регистрация работника службы [не будет предпринята](src/registerServiceWorker.js) в браузерах, которые её не поддерживают.

1. Сервисный работник включен только в [производственной среде](#deployment), например вывод `npm run build`. 
Рекомендуется не включать сервис-воркера, работающего в автономном режиме, в среде разработки, поскольку это может привести к разочарованию, когда используются ранее кэшированные ресурсы и не включаются последние изменения, внесенные вами локально.

1. Если вам *нужно* протестировать вашего сервис-воркера, работающего в автономном режиме, локально, создайте приложение (используя `npm run build`) и запустите простой http-сервер из вашего каталога сборки. После запуска сценария сборки `create-react-app` предоставит инструкции для одного из способов локального тестирования вашей производственной сборки, а [инструкции по развертыванию](#deployment) содержат инструкции по использованию других методов. *Обязательно всегда используйте окно в режиме инкогнито, чтобы избежать проблем с кешем вашего браузера.*

1. Если возможно, настройте свою производственную среду для обслуживания сгенерированного `service-worker.js` [с отключенным кешированием HTTP](http://stackoverflow.com/questions/38843970/service-worker-javascript-update-frequency-every-24-hours).
Если это невозможно - например, [GitHub Pages](#github-pages) не позволяет вам изменить 10-минутное время жизни HTTP-кеша по умолчанию, - тогда имейте в виду, что если вы посетите свой рабочий сайт, а затем снова посетите его, прежде чем  срок действия `service-worker.js` истёк из вашего HTTP-кеша, вы продолжите получать ранее кэшированные ресурсы от сервис-воркера.
Если вам срочно нужно просмотреть обновленное производственное развертывание, выполнение смены-обновления временно отключит сервис-воркер и извлечёт все активы из сети.

1. Пользователи не всегда знакомы с веб-приложениями, ориентированными прежде всего на офлайн. Может быть полезно [сообщить пользователю](https://developers.google.com/web/fundamentals/instant-and-offline/offline-ux#inform_the_user_when_the_app_is_ready_for_offline_consumption), когда работник службы завершит заполнение ваших кешей (отображается Сообщение «Это веб-приложение работает в автономном режиме!»), А также сообщить им, когда работник службы загрузит последние обновления, которые будут доступны при следующей загрузке страницы (отображается сообщение «Доступно новое содержимое; обновите»). . Отображение этих сообщений в настоящее время оставлено в качестве упражнения для разработчика, но в качестве отправной точки вы можете использовать логику, включенную в [`src/registerServiceWorker.js`](src/registerServiceWorker.js), которая демонстрирует, какой работник службы события жизненного цикла, которые нужно прослушивать для обнаружения каждого сценария, и которые по умолчанию просто записывают соответствующие сообщения в консоль JavaScript.

1. По умолчанию сгенерированный файл сервис-воркера не будет перехватывать и кэшировать какой-либо трафик из разных источников, например HTTP [запросы API](#integrating-with-an-api-backend), изображения или встраиваемые файлы, загруженные из другого домена. Если вы хотите использовать стратегию кэширования времени выполнения для этих запросов, вы можете [`eject`](#npm-run-eject), а затем настроить [`runtimeCaching`](https://github.com/GoogleChrome/sw-precache#runtimecaching-arrayobject) в разделе `SWPrecacheWebpackPlugin` файла [`webpack.config.prod.js`](../config/webpack.config.prod.js).

### Progressive Web App Metadata

Конфигурация по умолчанию включает в себя манифест веб-приложения, расположенный в [`public/manifest.json`](public/manifest.json), который вы можете настроить, указав детали, специфичные для вашего веб-приложения.

Когда пользователь добавляет веб-приложение на свой рабочий стол с помощью Chrome или Firefox на Android, метаданные в [`manifest.json`](public/manifest.json) определяют, какие значки, имена и цвета брендинга использовать, когда веб-приложение отображается. [Руководство по манифесту веб-приложения](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/) предоставляет более подробную информацию о том, что означает каждое поле и как ваши настройки повлияют на опыт ваших пользователей.

## Analyzing the Bundle Size

[Обозреватель исходных карт](https://www.npmjs.com/package/source-map-explorer) анализирует пакеты JavaScript с использованием исходных карт. Это поможет вам понять, откуда происходит раздувание кода.

Чтобы добавить проводник исходной карты в проект Create React App, выполните следующие действия:

```sh
npm install --save source-map-explorer
```

В качестве альтернативы вы можете использовать `yarn`:

```sh
yarn add source-map-explorer
```

Затем в `package.json` добавьте в `scripts` следующую строку:

```diff
   "scripts": {
+    "analyze": "source-map-explorer build/static/js/main.*",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test --env=jsdom",
```

Затем, чтобы проанализировать пакет, запустите производственную сборку, затем запустите сценарий анализа.

```
npm run build
npm run analyze
```

## Deployment

`npm run build` создает каталог `build` с производственной сборкой вашего приложения. Настройте ваш любимый HTTP-сервер так, чтобы посетитель вашего сайта обслуживал `index.html`, а запросы к статическим путям, например, `/static/js/main.<hash>.js`, обслуживались содержимым файла `/static/js/main.<hash>.js`.

### Static Server

Для сред, использующих [Node](https://nodejs.org/), самый простой способ справиться с этим - установить [serve](https://github.com/zeit/serve) и позволить ему сделать всё остальное:

```sh
npm install -g serve
serve -s build
```

Последняя команда, показанная выше, будет обслуживать ваш статический сайт через порт **5000**. 
Как и многие внутренние настройки [serve](https://github.com/zeit/serve), порт можно настроить с помощью флагов `-p` или `--port`.

Выполните эту команду, чтобы получить полный список доступных опций:

```sh
serve -h
```

### Other Solutions

Вам не обязательно нужен статический сервер для запуска проекта Create React App в рабочей среде. Он так же прекрасно работает в интеграции с существующим динамическим.

Вот программный пример с использованием [Node](https://nodejs.org/), а также [Express](http://expressjs.com/):

```javascript
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
```

Выбор серверного программного обеспечения тоже не важен. Поскольку приложение Create React полностью не зависит от платформы, нет необходимости явно использовать Node.

Папка `build` со статическими активами - единственный результат, созданный приложением Create React.

Однако этого недостаточно, если вы используете маршрутизацию на стороне клиента. Прочтите следующий раздел, если вы хотите поддерживать URL-адреса типа `/todos/42` в своем одностраничном приложении.

### Serving Apps with Client-Side Routing

Если вы используете маршрутизаторы, которые используют HTML5 [`pushState` history API](https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries) под капотом (например, [React Router](https://github.com/ReactTraining/react-router) с помощью browserHistory), многие статические файловые серверы выйдут из строя. Например, если вы использовали React Router с маршрутом для `/todos/42`, сервер разработки будет правильно отвечать на `localhost:3000/todos/42`, а Express, обслуживающий производственную сборку, как указано выше, не будет.

Это происходит потому, что при загрузке новой страницы для `/todos/42` сервер ищет файл `build/todos/42` и не находит его. Сервер должен быть настроен для ответа на запрос к `/todos/42`, обслуживая `index.html`. Например, мы можем изменить наш пример Express выше, чтобы он обслуживал `index.html` для любых неизвестных путей:

```diff
 app.use(express.static(path.join(__dirname, 'build')));

-app.get('/', function (req, res) {
+app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });
```

If you’re using [Apache HTTP Server](https://httpd.apache.org/), you need to create a `.htaccess` file in the `public` folder that looks like this:

```
    Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]
```

It will get copied to the `build` folder when you run `npm run build`. 

If you’re using [Apache Tomcat](http://tomcat.apache.org/), you need to follow [this Stack Overflow answer](https://stackoverflow.com/a/41249464/4878474).

Now requests to `/todos/42` will be handled correctly both in development and in production.

On a production build, and in a browser that supports [service workers](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers),
the service worker will automatically handle all navigation requests, like for
`/todos/42`, by serving the cached copy of your `index.html`. This
service worker navigation routing can be configured or disabled by
[`eject`ing](#npm-run-eject) and then modifying the
[`navigateFallback`](https://github.com/GoogleChrome/sw-precache#navigatefallback-string)
and [`navigateFallbackWhitelist`](https://github.com/GoogleChrome/sw-precache#navigatefallbackwhitelist-arrayregexp)
options of the `SWPreachePlugin` [configuration](../config/webpack.config.prod.js).

When users install your app to the homescreen of their device the default configuration will make a shortcut to `/index.html`. This may not work for client-side routers which expect the app to be served from `/`. Edit the web app manifest at [`public/manifest.json`](public/manifest.json) and change `start_url` to match the required URL scheme, for example:

```js
  "start_url": ".",
```

### Building for Relative Paths

By default, Create React App produces a build assuming your app is hosted at the server root.<br>
To override this, specify the `homepage` in your `package.json`, for example:

```js
  "homepage": "http://mywebsite.com/relativepath",
```

This will let Create React App correctly infer the root path to use in the generated HTML file.

**Note**: If you are using `react-router@^4`, you can root `<Link>`s using the `basename` prop on any `<Router>`.<br>
More information [here](https://reacttraining.com/react-router/web/api/BrowserRouter/basename-string).<br>
<br>
For example:
```js
<BrowserRouter basename="/calendar"/>
<Link to="/today"/> // renders <a href="/calendar/today">
```

#### Serving the Same Build from Different Paths

>Note: this feature is available with `react-scripts@0.9.0` and higher.

If you are not using the HTML5 `pushState` history API or not using client-side routing at all, it is unnecessary to specify the URL from which your app will be served. Instead, you can put this in your `package.json`:

```js
  "homepage": ".",
```

This will make sure that all the asset paths are relative to `index.html`. You will then be able to move your app from `http://mywebsite.com` to `http://mywebsite.com/relativepath` or even `http://mywebsite.com/relative/path` without having to rebuild it.

### [Azure](https://azure.microsoft.com/)

See [this](https://medium.com/@to_pe/deploying-create-react-app-on-microsoft-azure-c0f6686a4321) blog post on how to deploy your React app to Microsoft Azure.

See [this](https://medium.com/@strid/host-create-react-app-on-azure-986bc40d5bf2#.pycfnafbg) blog post or [this](https://github.com/ulrikaugustsson/azure-appservice-static) repo for a way to use automatic deployment to Azure App Service.

### [Firebase](https://firebase.google.com/)

Install the Firebase CLI if you haven’t already by running `npm install -g firebase-tools`. Sign up for a [Firebase account](https://console.firebase.google.com/) and create a new project. Run `firebase login` and login with your previous created Firebase account.

Then run the `firebase init` command from your project’s root. You need to choose the **Hosting: Configure and deploy Firebase Hosting sites** and choose the Firebase project you created in the previous step. You will need to agree with `database.rules.json` being created, choose `build` as the public directory, and also agree to **Configure as a single-page app** by replying with `y`.

```sh
    === Project Setup

    First, let's associate this project directory with a Firebase project.
    You can create multiple project aliases by running firebase use --add,
    but for now we'll just set up a default project.

    ? What Firebase project do you want to associate as default? Example app (example-app-fd690)

    === Database Setup

    Firebase Realtime Database Rules allow you to define how your data should be
    structured and when your data can be read from and written to.

    ? What file should be used for Database Rules? database.rules.json
    ✔  Database Rules for example-app-fd690 have been downloaded to database.rules.json.
    Future modifications to database.rules.json will update Database Rules when you run
    firebase deploy.

    === Hosting Setup

    Your public directory is the folder (relative to your project directory) that
    will contain Hosting assets to uploaded with firebase deploy. If you
    have a build process for your assets, use your build's output directory.

    ? What do you want to use as your public directory? build
    ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
    ✔  Wrote build/index.html

    i  Writing configuration info to firebase.json...
    i  Writing project information to .firebaserc...

    ✔  Firebase initialization complete!
```

IMPORTANT: you need to set proper HTTP caching headers for `service-worker.js` file in `firebase.json` file or you will not be able to see changes after first deployment ([issue #2440](https://github.com/facebookincubator/create-react-app/issues/2440)). It should be added inside `"hosting"` key like next:

```
{
  "hosting": {
    ...
    "headers": [
      {"source": "/service-worker.js", "headers": [{"key": "Cache-Control", "value": "no-cache"}]}
    ]
    ...
```

Now, after you create a production build with `npm run build`, you can deploy it by running `firebase deploy`.

```sh
    === Deploying to 'example-app-fd690'...

    i  deploying database, hosting
    ✔  database: rules ready to deploy.
    i  hosting: preparing build directory for upload...
    Uploading: [==============================          ] 75%✔  hosting: build folder uploaded successfully
    ✔  hosting: 8 files uploaded successfully
    i  starting release process (may take several minutes)...

    ✔  Deploy complete!

    Project Console: https://console.firebase.google.com/project/example-app-fd690/overview
    Hosting URL: https://example-app-fd690.firebaseapp.com
```

For more information see [Add Firebase to your JavaScript Project](https://firebase.google.com/docs/web/setup).

### [GitHub Pages](https://pages.github.com/)

>Note: this feature is available with `react-scripts@0.2.0` and higher.

#### Step 1: Add `homepage` to `package.json`

**The step below is important!**<br>
**If you skip it, your app will not deploy correctly.**

Open your `package.json` and add a `homepage` field for your project:

```json
  "homepage": "https://myusername.github.io/my-app",
```

or for a GitHub user page:

```json
  "homepage": "https://myusername.github.io",
```

Create React App uses the `homepage` field to determine the root URL in the built HTML file.

#### Step 2: Install `gh-pages` and add `deploy` to `scripts` in `package.json`

Now, whenever you run `npm run build`, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

To publish it at [https://myusername.github.io/my-app](https://myusername.github.io/my-app), run:

```sh
npm install --save gh-pages
```

Alternatively you may use `yarn`:

```sh
yarn add gh-pages
```

Add the following scripts in your `package.json`:

```diff
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

The `predeploy` script will run automatically before `deploy` is run.

If you are deploying to a GitHub user page instead of a project page you'll need to make two
additional modifications:

1. First, change your repository's source branch to be any branch other than **master**.
1. Additionally, tweak your `package.json` scripts to push deployments to **master**:
```diff
  "scripts": {
    "predeploy": "npm run build",
-   "deploy": "gh-pages -d build",
+   "deploy": "gh-pages -b master -d build",
```

#### Step 3: Deploy the site by running `npm run deploy`

Then run:

```sh
npm run deploy
```

#### Step 4: Ensure your project’s settings use `gh-pages`

Finally, make sure **GitHub Pages** option in your GitHub project settings is set to use the `gh-pages` branch:

<img src="http://i.imgur.com/HUjEr9l.png" width="500" alt="gh-pages branch setting">

#### Step 5: Optionally, configure the domain

You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.

#### Notes on client-side routing

GitHub Pages doesn’t support routers that use the HTML5 `pushState` history API under the hood (for example, React Router using `browserHistory`). This is because when there is a fresh page load for a url like `http://user.github.io/todomvc/todos/42`, where `/todos/42` is a frontend route, the GitHub Pages server returns 404 because it knows nothing of `/todos/42`. If you want to add a router to a project hosted on GitHub Pages, here are a couple of solutions:

* You could switch from using HTML5 history API to routing with hashes. If you use React Router, you can switch to `hashHistory` for this effect, but the URL will be longer and more verbose (for example, `http://user.github.io/todomvc/#/todos/42?_k=yknaj`). [Read more](https://reacttraining.com/react-router/web/api/Router) about different history implementations in React Router.
* Alternatively, you can use a trick to teach GitHub Pages to handle 404 by redirecting to your `index.html` page with a special redirect parameter. You would need to add a `404.html` file with the redirection code to the `build` folder before deploying your project, and you’ll need to add code handling the redirect parameter to `index.html`. You can find a detailed explanation of this technique [in this guide](https://github.com/rafrex/spa-github-pages).

#### Troubleshooting

##### "/dev/tty: No such a device or address"

If, when deploying, you get `/dev/tty: No such a device or address` or a similar error, try the follwing:

1. Create a new [Personal Access Token](https://github.com/settings/tokens)
2. `git remote set-url origin https://<user>:<token>@github.com/<user>/<repo>` .
3. Try `npm run deploy again`

### [Heroku](https://www.heroku.com/)

Use the [Heroku Buildpack for Create React App](https://github.com/mars/create-react-app-buildpack).<br>
You can find instructions in [Deploying React with Zero Configuration](https://blog.heroku.com/deploying-react-with-zero-configuration).

#### Resolving Heroku Deployment Errors

Sometimes `npm run build` works locally but fails during deploy via Heroku. Following are the most common cases.

##### "Module not found: Error: Cannot resolve 'file' or 'directory'"

If you get something like this:

```
remote: Failed to create a production build. Reason:
remote: Module not found: Error: Cannot resolve 'file' or 'directory'
MyDirectory in /tmp/build_1234/src
```

It means you need to ensure that the lettercase of the file or directory you `import` matches the one you see on your filesystem or on GitHub.

This is important because Linux (the operating system used by Heroku) is case sensitive. So `MyDirectory` and `mydirectory` are two distinct directories and thus, even though the project builds locally, the difference in case breaks the `import` statements on Heroku remotes.

##### "Could not find a required file."

If you exclude or ignore necessary files from the package you will see a error similar this one:

```
remote: Could not find a required file.
remote:   Name: `index.html`
remote:   Searched in: /tmp/build_a2875fc163b209225122d68916f1d4df/public
remote:
remote: npm ERR! Linux 3.13.0-105-generic
remote: npm ERR! argv "/tmp/build_a2875fc163b209225122d68916f1d4df/.heroku/node/bin/node" "/tmp/build_a2875fc163b209225122d68916f1d4df/.heroku/node/bin/npm" "run" "build"
```

In this case, ensure that the file is there with the proper lettercase and that’s not ignored on your local `.gitignore` or `~/.gitignore_global`.

### [Netlify](https://www.netlify.com/)

**To do a manual deploy to Netlify’s CDN:**

```sh
npm install netlify-cli -g
netlify deploy
```

Choose `build` as the path to deploy.

**To setup continuous delivery:**

With this setup Netlify will build and deploy when you push to git or open a pull request:

1. [Start a new netlify project](https://app.netlify.com/signup)
2. Pick your Git hosting service and select your repository
3. Set `yarn build` as the build command and `build` as the publish directory
4. Click `Deploy site`

**Support for client-side routing:**

To support `pushState`, make sure to create a `public/_redirects` file with the following rewrite rules:

```
/*  /index.html  200
```

When you build the project, Create React App will place the `public` folder contents into the build output.

### [Now](https://zeit.co/now)

Now offers a zero-configuration single-command deployment. You can use `now` to deploy your app for free.

1. Install the `now` command-line tool either via the recommended [desktop tool](https://zeit.co/download) or via node with `npm install -g now`.

2. Build your app by running `npm run build`.

3. Move into the build directory by running `cd build`.

4. Run `now --name your-project-name` from within the build directory. You will see a **now.sh** URL in your output like this:

    ```
    > Ready! https://your-project-name-tpspyhtdtk.now.sh (copied to clipboard)
    ```

    Paste that URL into your browser when the build is complete, and you will see your deployed app.

Details are available in [this article.](https://zeit.co/blog/unlimited-static)

### [S3](https://aws.amazon.com/s3) and [CloudFront](https://aws.amazon.com/cloudfront/)

See this [blog post](https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af) on how to deploy your React app to Amazon Web Services S3 and CloudFront.

### [Surge](https://surge.sh/)

Install the Surge CLI if you haven’t already by running `npm install -g surge`. Run the `surge` command and log in you or create a new account.

When asked about the project path, make sure to specify the `build` folder, for example:

```sh
       project path: /path/to/project/build
```

Note that in order to support routers that use HTML5 `pushState` API, you may want to rename the `index.html` in your build folder to `200.html` before deploying to Surge. This [ensures that every URL falls back to that file](https://surge.sh/help/adding-a-200-page-for-client-side-routing).

## Advanced Configuration

You can adjust various development and production settings by setting environment variables in your shell or with [.env](#adding-development-environment-variables-in-env).

Variable | Development | Production | Usage
:--- | :---: | :---: | :---
BROWSER | :white_check_mark: | :x: | By default, Create React App will open the default system browser, favoring Chrome on macOS. Specify a [browser](https://github.com/sindresorhus/opn#app) to override this behavior, or set it to `none` to disable it completely. If you need to customize the way the browser is launched, you can specify a node script instead. Any arguments passed to `npm start` will also be passed to this script, and the url where your app is served will be the last argument. Your script's file name must have the `.js` extension.
HOST | :white_check_mark: | :x: | By default, the development web server binds to `localhost`. You may use this variable to specify a different host.
PORT | :white_check_mark: | :x: | By default, the development web server will attempt to listen on port 3000 or prompt you to attempt the next available port. You may use this variable to specify a different port.
HTTPS | :white_check_mark: | :x: | When set to `true`, Create React App will run the development server in `https` mode.
PUBLIC_URL | :x: | :white_check_mark: | Create React App assumes your application is hosted at the serving web server's root or a subpath as specified in [`package.json` (`homepage`)](#building-for-relative-paths). Normally, Create React App ignores the hostname. You may use this variable to force assets to be referenced verbatim to the url you provide (hostname included). This may be particularly useful when using a CDN to host your application.
CI | :large_orange_diamond: | :white_check_mark: | When set to `true`, Create React App treats warnings as failures in the build. It also makes the test runner non-watching. Most CIs set this flag by default.
REACT_EDITOR | :white_check_mark: | :x: | When an app crashes in development, you will see an error overlay with clickable stack trace. When you click on it, Create React App will try to determine the editor you are using based on currently running processes, and open the relevant source file. You can [send a pull request to detect your editor of choice](https://github.com/facebookincubator/create-react-app/issues/2636). Setting this environment variable overrides the automatic detection. If you do it, make sure your systems [PATH](https://en.wikipedia.org/wiki/PATH_(variable)) environment variable points to your editor’s bin folder. You can also set it to `none` to disable it completely.
CHOKIDAR_USEPOLLING | :white_check_mark: | :x: | When set to `true`, the watcher runs in polling mode, as necessary inside a VM. Use this option if `npm start` isn't detecting changes.
GENERATE_SOURCEMAP | :x: | :white_check_mark: | When set to `false`, source maps are not generated for a production build. This solves OOM issues on some smaller machines.
NODE_PATH | :white_check_mark: |  :white_check_mark: | Same as [`NODE_PATH` in Node.js](https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders), but only relative folders are allowed. Can be handy for emulating a monorepo setup by setting `NODE_PATH=src`.

## Troubleshooting

### `npm start` doesn’t detect changes

When you save a file while `npm start` is running, the browser should refresh with the updated code.<br>
If this doesn’t happen, try one of the following workarounds:

* If your project is in a Dropbox folder, try moving it out.
* If the watcher doesn’t see a file called `index.js` and you’re referencing it by the folder name, you [need to restart the watcher](https://github.com/facebookincubator/create-react-app/issues/1164) due to a Webpack bug.
* Some editors like Vim and IntelliJ have a “safe write” feature that currently breaks the watcher. You will need to disable it. Follow the instructions in [“Adjusting Your Text Editor”](https://webpack.js.org/guides/development/#adjusting-your-text-editor).
* If your project path contains parentheses, try moving the project to a path without them. This is caused by a [Webpack watcher bug](https://github.com/webpack/watchpack/issues/42).
* On Linux and macOS, you might need to [tweak system settings](https://github.com/webpack/docs/wiki/troubleshooting#not-enough-watchers) to allow more watchers.
* If the project runs inside a virtual machine such as (a Vagrant provisioned) VirtualBox, create an `.env` file in your project directory if it doesn’t exist, and add `CHOKIDAR_USEPOLLING=true` to it. This ensures that the next time you run `npm start`, the watcher uses the polling mode, as necessary inside a VM.

If none of these solutions help please leave a comment [in this thread](https://github.com/facebookincubator/create-react-app/issues/659).

### `npm test` hangs on macOS Sierra

If you run `npm test` and the console gets stuck after printing `react-scripts test --env=jsdom` to the console there might be a problem with your [Watchman](https://facebook.github.io/watchman/) installation as described in [facebookincubator/create-react-app#713](https://github.com/facebookincubator/create-react-app/issues/713).

We recommend deleting `node_modules` in your project and running `npm install` (or `yarn` if you use it) first. If it doesn't help, you can try one of the numerous workarounds mentioned in these issues:

* [facebook/jest#1767](https://github.com/facebook/jest/issues/1767)
* [facebook/watchman#358](https://github.com/facebook/watchman/issues/358)
* [ember-cli/ember-cli#6259](https://github.com/ember-cli/ember-cli/issues/6259)

It is reported that installing Watchman 4.7.0 or newer fixes the issue. If you use [Homebrew](http://brew.sh/), you can run these commands to update it:

```
watchman shutdown-server
brew update
brew reinstall watchman
```

You can find [other installation methods](https://facebook.github.io/watchman/docs/install.html#build-install) on the Watchman documentation page.

If this still doesn’t help, try running `launchctl unload -F ~/Library/LaunchAgents/com.github.facebook.watchman.plist`.

There are also reports that *uninstalling* Watchman fixes the issue. So if nothing else helps, remove it from your system and try again.

### `npm run build` exits too early

It is reported that `npm run build` can fail on machines with limited memory and no swap space, which is common in cloud environments. Even with small projects this command can increase RAM usage in your system by hundreds of megabytes, so if you have less than 1 GB of available memory your build is likely to fail with the following message:

>  The build failed because the process exited too early. This probably means the system ran out of memory or someone called `kill -9` on the process.

If you are completely sure that you didn't terminate the process, consider [adding some swap space](https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-ubuntu-14-04) to the machine you’re building on, or build the project locally.

### `npm run build` fails on Heroku

This may be a problem with case sensitive filenames.
Please refer to [this section](#resolving-heroku-deployment-errors).

### Moment.js locales are missing

If you use a [Moment.js](https://momentjs.com/), you might notice that only the English locale is available by default. This is because the locale files are large, and you probably only need a subset of [all the locales provided by Moment.js](https://momentjs.com/#multiple-locale-support).

To add a specific Moment.js locale to your bundle, you need to import it explicitly.<br>
For example:

```js
import moment from 'moment';
import 'moment/locale/fr';
```

Если импортировать несколько локалей таким образом, вы можете позже переключаться между ними, вызывая `moment.locale()` с именем локали:

```js
import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/es';

// ...

moment.locale('fr');
```

Это будет работать только для локалей, которые были явно импортированы ранее.

### `npm run build` не удается минимизировать

Некоторые сторонние пакеты не компилируют свой код в ES5 перед публикацией в npm. Это часто вызывает проблемы в экосистеме, потому что ни браузеры (за исключением большинства современных версий), ни некоторые инструменты в настоящее время не поддерживают все функции ES6. Мы рекомендуем публиковать код на npm как ES5 хотя бы на несколько лет.

<br>
Чтобы решить эту проблему:

1. Откройте проблему в системе отслеживания проблем зависимости и попросите опубликовать пакет предварительно скомпилированным.
  * Note: Приложение Create React может использовать модули CommonJS и ES. Для совместимости с Node.js рекомендуется, чтобы основной точкой входа был CommonJS. Однако они могут дополнительно предоставить точку входа модуля ES с полем `module` в `package.json`. Обратите внимание, что **даже если библиотека предоставляет версию модулей ES, она все равно должна предварительно компилировать другие функции ES6 в ES5, если намеревается поддерживать старые браузеры**.

2. Создайте ветку пакета и самостоятельно опубликуйте исправленную версию. 

3. Если зависимость достаточно мала, скопируйте ее в папку `src /` и рассматривайте как код приложения.

В будущем мы можем начать автоматическую компиляцию несовместимых сторонних модулей, но в настоящее время это не поддерживается. Такой подход также замедлит производственные сборки.

## Alternatives to Ejecting

[Ejecting](#npm-run-eject) позволяет настраивать что угодно, но с этого момента вам придется самостоятельно поддерживать конфигурацию и сценарии. Это может быть сложно, если у вас много похожих проектов. В таких случаях вместо выброса рекомендуется *fork* `react-scripts` и любые другие необходимые вам пакеты. [Эта статья](https://auth0.com/blog/how-to-configure-create-react-app/) подробно описывает, как это сделать. Вы можете найти более подробное обсуждение в [этой проблеме](https://github.com/facebookincubator/create-react-app/issues/682).

## Something Missing?

Если у вас есть идеи по поводу дополнительных рецептов, которые должны быть на этой странице, [сообщите нам](https://github.com/facebookincubator/create-react-app/issues) или [внесите свой вклад!](https://github.com/facebookincubator/create-react-app/edit/master/packages/react-scripts/template/README.md)
