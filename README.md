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

React doesn't prescribe a specific approach to data fetching, but people commonly use either a library like [axios](https://github.com/axios/axios) or the [`fetch()` API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) provided by the browser. Conveniently, Create React App includes a polyfill for `fetch()` so you can use it without worrying about the browser support.

The global `fetch` function allows to easily makes AJAX requests. It takes in a URL as an input and returns a `Promise` that resolves to a `Response` object. You can find more information about `fetch` [here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

This project also includes a [Promise polyfill](https://github.com/then/promise) which provides a full implementation of Promises/A+. A Promise represents the eventual result of an asynchronous operation, you can find more information about Promises [here](https://www.promisejs.org/) and [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). Both axios and `fetch()` use Promises under the hood. You can also use the [`async / await`](https://davidwalsh.name/async-await) syntax to reduce the callback nesting.

You can learn more about making AJAX requests from React components in [the FAQ entry on the React website](https://reactjs.org/docs/faq-ajax.html).

## Integrating with an API Backend

These tutorials will help you to integrate your app with an API backend running on another port,
using `fetch()` to access it.

### Node
Check out [this tutorial](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/).
You can find the companion GitHub repository [here](https://github.com/fullstackreact/food-lookup-demo).

### Ruby on Rails

Check out [this tutorial](https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/).
You can find the companion GitHub repository [here](https://github.com/fullstackreact/food-lookup-demo-rails).

## Proxying API Requests in Development

>Note: this feature is available with `react-scripts@0.2.3` and higher.

People often serve the front-end React app from the same host and port as their backend implementation.<br>
For example, a production setup might look like this after the app is deployed:

```
/             - static server returns index.html with React app
/todos        - static server returns index.html with React app
/api/todos    - server handles any /api/* requests using the backend implementation
```

Such setup is **not** required. However, if you **do** have a setup like this, it is convenient to write requests like `fetch('/api/todos')` without worrying about redirecting them to another host or port during development.

To tell the development server to proxy any unknown requests to your API server in development, add a `proxy` field to your `package.json`, for example:

```js
  "proxy": "http://localhost:4000",
```

This way, when you `fetch('/api/todos')` in development, the development server will recognize that it’s not a static asset, and will proxy your request to `http://localhost:4000/api/todos` as a fallback. The development server will **only** attempt to send requests without `text/html` in its `Accept` header to the proxy.

Conveniently, this avoids [CORS issues](http://stackoverflow.com/questions/21854516/understanding-ajax-cors-and-security-considerations) and error messages like this in development:

```
Fetch API cannot load http://localhost:4000/api/todos. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

Keep in mind that `proxy` only has effect in development (with `npm start`), and it is up to you to ensure that URLs like `/api/todos` point to the right thing in production. You don’t have to use the `/api` prefix. Any unrecognized request without a `text/html` accept header will be redirected to the specified `proxy`.

The `proxy` option supports HTTP, HTTPS and WebSocket connections.<br>
If the `proxy` option is **not** flexible enough for you, alternatively you can:

* [Configure the proxy yourself](#configuring-the-proxy-manually)
* Enable CORS on your server ([here’s how to do it for Express](http://enable-cors.org/server_expressjs.html)).
* Use [environment variables](#adding-custom-environment-variables) to inject the right server host and port into your app.

### "Invalid Host Header" Errors After Configuring Proxy

When you enable the `proxy` option, you opt into a more strict set of host checks. This is necessary because leaving the backend open to remote hosts makes your computer vulnerable to DNS rebinding attacks. The issue is explained in [this article](https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a) and [this issue](https://github.com/webpack/webpack-dev-server/issues/887).

This shouldn’t affect you when developing on `localhost`, but if you develop remotely like [described here](https://github.com/facebookincubator/create-react-app/issues/2271), you will see this error in the browser after enabling the `proxy` option:

>Invalid Host header

To work around it, you can specify your public development host in a file called `.env.development` in the root of your project:

```
HOST=mypublicdevhost.com
```

If you restart the development server now and load the app from the specified host, it should work.

If you are still having issues or if you’re using a more exotic environment like a cloud editor, you can bypass the host check completely by adding a line to `.env.development.local`. **Note that this is dangerous and exposes your machine to remote code execution from malicious websites:**

```
# NOTE: THIS IS DANGEROUS!
# It exposes your machine to attacks from the websites you visit.
DANGEROUSLY_DISABLE_HOST_CHECK=true
```

We don’t recommend this approach.

### Configuring the Proxy Manually

>Note: this feature is available with `react-scripts@1.0.0` and higher.

If the `proxy` option is **not** flexible enough for you, you can specify an object in the following form (in `package.json`).<br>
You may also specify any configuration value [`http-proxy-middleware`](https://github.com/chimurai/http-proxy-middleware#options) or [`http-proxy`](https://github.com/nodejitsu/node-http-proxy#options) supports.
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

All requests matching this path will be proxies, no exceptions. This includes requests for `text/html`, which the standard `proxy` option does not proxy.

If you need to specify multiple proxies, you may do so by specifying additional entries.
Matches are regular expressions, so that you can use a regexp to match multiple paths.
```js
{
  // ...
  "proxy": {
    // Matches any request starting with /api
    "/api": {
      "target": "<url_1>",
      "ws": true
      // ...
    },
    // Matches any request starting with /foo
    "/foo": {
      "target": "<url_2>",
      "ssl": true,
      "pathRewrite": {
        "^/foo": "/foo/beta"
      }
      // ...
    },
    // Matches /bar/abc.html but not /bar/sub/def.html
    "/bar/[^/]*[.]html": {
      "target": "<url_3>",
      // ...
    },
    // Matches /baz/abc.html and /baz/sub/def.html
    "/baz/.*/.*[.]html": {
      "target": "<url_4>"
      // ...
    }
  }
  // ...
}
```

### Configuring a WebSocket Proxy

When setting up a WebSocket proxy, there are a some extra considerations to be aware of.

If you’re using a WebSocket engine like [Socket.io](https://socket.io/), you must have a Socket.io server running that you can use as the proxy target. Socket.io will not work with a standard WebSocket server. Specifically, don't expect Socket.io to work with [the websocket.org echo test](http://websocket.org/echo.html).

There’s some good documentation available for [setting up a Socket.io server](https://socket.io/docs/).

Standard WebSockets **will** work with a standard WebSocket server as well as the websocket.org echo test. You can use libraries like [ws](https://github.com/websockets/ws) for the server, with [native WebSockets in the browser](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket).

Either way, you can proxy WebSocket requests manually in `package.json`:

```js
{
  // ...
  "proxy": {
    "/socket": {
      // Your compatible WebSocket server
      "target": "ws://<socket_url>",
      // Tell http-proxy-middleware that this is a WebSocket proxy.
      // Also allows you to proxy WebSocket requests without an additional HTTP request
      // https://github.com/chimurai/http-proxy-middleware#external-websocket-upgrade
      "ws": true
      // ...
    }
  }
  // ...
}
```

## Using HTTPS in Development

>Note: this feature is available with `react-scripts@0.4.0` and higher.

You may require the dev server to serve pages over HTTPS. One particular case where this could be useful is when using [the "proxy" feature](#proxying-api-requests-in-development) to proxy requests to an API server when that API server is itself serving HTTPS.

To do this, set the `HTTPS` environment variable to `true`, then start the dev server as usual with `npm start`:

#### Windows (cmd.exe)

```cmd
set HTTPS=true&&npm start
```

#### Windows (Powershell)

```Powershell
($env:HTTPS = $true) -and (npm start)
```

(Note: the lack of whitespace is intentional.)

#### Linux, macOS (Bash)

```bash
HTTPS=true npm start
```

Note that the server will use a self-signed certificate, so your web browser will almost definitely display a warning upon accessing the page.

## Generating Dynamic `<meta>` Tags on the Server

Since Create React App doesn’t support server rendering, you might be wondering how to make `<meta>` tags dynamic and reflect the current URL. To solve this, we recommend to add placeholders into the HTML, like this:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta property="og:title" content="__OG_TITLE__">
    <meta property="og:description" content="__OG_DESCRIPTION__">
```

Then, on the server, regardless of the backend you use, you can read `index.html` into memory and replace `__OG_TITLE__`, `__OG_DESCRIPTION__`, and any other placeholders with values depending on the current URL. Just make sure to sanitize and escape the interpolated values so that they are safe to embed into HTML!

If you use a Node server, you can even share the route matching logic between the client and the server. However duplicating it also works fine in simple cases.

## Pre-Rendering into Static HTML Files

If you’re hosting your `build` with a static hosting provider you can use [react-snapshot](https://www.npmjs.com/package/react-snapshot) or [react-snap](https://github.com/stereobooster/react-snap) to generate HTML pages for each route, or relative link, in your application. These pages will then seamlessly become active, or “hydrated”, when the JavaScript bundle has loaded.

There are also opportunities to use this outside of static hosting, to take the pressure off the server when generating and caching routes.

The primary benefit of pre-rendering is that you get the core content of each page _with_ the HTML payload—regardless of whether or not your JavaScript bundle successfully downloads. It also increases the likelihood that each route of your application will be picked up by search engines.

You can read more about [zero-configuration pre-rendering (also called snapshotting) here](https://medium.com/superhighfives/an-almost-static-stack-6df0a2791319).

## Injecting Data from the Server into the Page

Similarly to the previous section, you can leave some placeholders in the HTML that inject global variables, for example:

```js
<!doctype html>
<html lang="en">
  <head>
    <script>
      window.SERVER_DATA = __SERVER_DATA__;
    </script>
```

Then, on the server, you can replace `__SERVER_DATA__` with a JSON of real data right before sending the response. The client code can then read `window.SERVER_DATA` to use it. **Make sure to [sanitize the JSON before sending it to the client](https://medium.com/node-security/the-most-common-xss-vulnerability-in-react-js-applications-2bdffbcc1fa0) as it makes your app vulnerable to XSS attacks.**

## Running Tests

>Note: this feature is available with `react-scripts@0.3.0` and higher.<br>
>[Read the migration guide to learn how to enable it in older projects!](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md#migrating-from-023-to-030)

Create React App uses [Jest](https://facebook.github.io/jest/) as its test runner. To prepare for this integration, we did a [major revamp](https://facebook.github.io/jest/blog/2016/09/01/jest-15.html) of Jest so if you heard bad things about it years ago, give it another try.

Jest is a Node-based runner. This means that the tests always run in a Node environment and not in a real browser. This lets us enable fast iteration speed and prevent flakiness.

While Jest provides browser globals such as `window` thanks to [jsdom](https://github.com/tmpvar/jsdom), they are only approximations of the real browser behavior. Jest is intended to be used for unit tests of your logic and your components rather than the DOM quirks.

We recommend that you use a separate tool for browser end-to-end tests if you need them. They are beyond the scope of Create React App.

### Filename Conventions

Jest will look for test files with any of the following popular naming conventions:

* Files with `.js` suffix in `__tests__` folders.
* Files with `.test.js` suffix.
* Files with `.spec.js` suffix.

The `.test.js` / `.spec.js` files (or the `__tests__` folders) can be located at any depth under the `src` top level folder.

We recommend to put the test files (or `__tests__` folders) next to the code they are testing so that relative imports appear shorter. For example, if `App.test.js` and `App.js` are in the same folder, the test just needs to `import App from './App'` instead of a long relative path. Colocation also helps find tests more quickly in larger projects.

### Command Line Interface

When you run `npm test`, Jest will launch in the watch mode. Every time you save a file, it will re-run the tests, just like `npm start` recompiles the code.

The watcher includes an interactive command-line interface with the ability to run all tests, or focus on a search pattern. It is designed this way so that you can keep it open and enjoy fast re-runs. You can learn the commands from the “Watch Usage” note that the watcher prints after every run:

![Jest watch mode](http://facebook.github.io/jest/img/blog/15-watch.gif)

### Version Control Integration

By default, when you run `npm test`, Jest will only run the tests related to files changed since the last commit. This is an optimization designed to make your tests run fast regardless of how many tests you have. However it assumes that you don’t often commit the code that doesn’t pass the tests.

Jest will always explicitly mention that it only ran tests related to the files changed since the last commit. You can also press `a` in the watch mode to force Jest to run all tests.

Jest will always run all tests on a [continuous integration](#continuous-integration) server or if the project is not inside a Git or Mercurial repository.

### Writing Tests

To create tests, add `it()` (or `test()`) blocks with the name of the test and its code. You may optionally wrap them in `describe()` blocks for logical grouping but this is neither required nor recommended.

Jest provides a built-in `expect()` global function for making assertions. A basic test could look like this:

```js
import sum from './sum';

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
```

All `expect()` matchers supported by Jest are [extensively documented here](https://facebook.github.io/jest/docs/en/expect.html#content).<br>
You can also use [`jest.fn()` and `expect(fn).toBeCalled()`](https://facebook.github.io/jest/docs/en/expect.html#tohavebeencalled) to create “spies” or mock functions.

### Testing Components

There is a broad spectrum of component testing techniques. They range from a “smoke test” verifying that a component renders without throwing, to shallow rendering and testing some of the output, to full rendering and testing component lifecycle and state changes.

Different projects choose different testing tradeoffs based on how often components change, and how much logic they contain. If you haven’t decided on a testing strategy yet, we recommend that you start with creating simple smoke tests for your components:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
```

This test mounts a component and makes sure that it didn’t throw during rendering. Tests like this provide a lot of value with very little effort so they are great as a starting point, and this is the test you will find in `src/App.test.js`.

When you encounter bugs caused by changing components, you will gain a deeper insight into which parts of them are worth testing in your application. This might be a good time to introduce more specific tests asserting specific expected output or behavior.

If you’d like to test components in isolation from the child components they render, we recommend using [`shallow()` rendering API](http://airbnb.io/enzyme/docs/api/shallow.html) from [Enzyme](http://airbnb.io/enzyme/). To install it, run:

```sh
npm install --save enzyme enzyme-adapter-react-16 react-test-renderer
```

Alternatively you may use `yarn`:

```sh
yarn add enzyme enzyme-adapter-react-16 react-test-renderer
```

As of Enzyme 3, you will need to install Enzyme along with an Adapter corresponding to the version of React you are using. (The examples above use the adapter for React 16.)

The adapter will also need to be configured in your [global setup file](#initializing-test-environment):

#### `src/setupTests.js`
```js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

>Note: Keep in mind that if you decide to "eject" before creating `src/setupTests.js`, the resulting `package.json` file won't contain any reference to it. [Read here](#initializing-test-environment) to learn how to add this after ejecting.

Now you can write a smoke test with it:

```js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});
```

Unlike the previous smoke test using `ReactDOM.render()`, this test only renders `<App>` and doesn’t go deeper. For example, even if `<App>` itself renders a `<Button>` that throws, this test will pass. Shallow rendering is great for isolated unit tests, but you may still want to create some full rendering tests to ensure the components integrate correctly. Enzyme supports [full rendering with `mount()`](http://airbnb.io/enzyme/docs/api/mount.html), and you can also use it for testing state changes and component lifecycle.

You can read the [Enzyme documentation](http://airbnb.io/enzyme/) for more testing techniques. Enzyme documentation uses Chai and Sinon for assertions but you don’t have to use them because Jest provides built-in `expect()` and `jest.fn()` for spies.

Here is an example from Enzyme documentation that asserts specific output, rewritten to use Jest matchers:

```js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
```

All Jest matchers are [extensively documented here](http://facebook.github.io/jest/docs/en/expect.html).<br>
Nevertheless you can use a third-party assertion library like [Chai](http://chaijs.com/) if you want to, as described below.

Additionally, you might find [jest-enzyme](https://github.com/blainekasten/enzyme-matchers) helpful to simplify your tests with readable matchers. The above `contains` code can be written more simply with jest-enzyme.

```js
expect(wrapper).toContainReact(welcome)
```

To enable this, install `jest-enzyme`:

```sh
npm install --save jest-enzyme
```

Alternatively you may use `yarn`:

```sh
yarn add jest-enzyme
```

Import it in [`src/setupTests.js`](#initializing-test-environment) to make its matchers available in every test:

```js
import 'jest-enzyme';
```

### Using Third Party Assertion Libraries

We recommend that you use `expect()` for assertions and `jest.fn()` for spies. If you are having issues with them please [file those against Jest](https://github.com/facebook/jest/issues/new), and we’ll fix them. We intend to keep making them better for React, supporting, for example, [pretty-printing React elements as JSX](https://github.com/facebook/jest/pull/1566).

However, if you are used to other libraries, such as [Chai](http://chaijs.com/) and [Sinon](http://sinonjs.org/), or if you have existing code using them that you’d like to port over, you can import them normally like this:

```js
import sinon from 'sinon';
import { expect } from 'chai';
```

and then use them in your tests like you normally do.

### Initializing Test Environment

>Note: this feature is available with `react-scripts@0.4.0` and higher.

If your app uses a browser API that you need to mock in your tests or if you just need a global setup before running your tests, add a `src/setupTests.js` to your project. It will be automatically executed before running your tests.

For example:

#### `src/setupTests.js`
```js
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock
```

>Note: Keep in mind that if you decide to "eject" before creating `src/setupTests.js`, the resulting `package.json` file won't contain any reference to it, so you should manually create the property `setupTestFrameworkScriptFile` in the configuration for Jest, something like the following:

>```js
>"jest": {
>   // ...
>   "setupTestFrameworkScriptFile": "<rootDir>/src/setupTests.js"
>  }
>  ```

### Focusing and Excluding Tests

You can replace `it()` with `xit()` to temporarily exclude a test from being executed.<br>
Similarly, `fit()` lets you focus on a specific test without running any other tests.

### Coverage Reporting

Jest has an integrated coverage reporter that works well with ES6 and requires no configuration.<br>
Run `npm test -- --coverage` (note extra `--` in the middle) to include a coverage report like this:

![coverage report](http://i.imgur.com/5bFhnTS.png)

Note that tests run much slower with coverage so it is recommended to run it separately from your normal workflow.

#### Configuration

The default Jest coverage configuration can be overriden by adding any of the following supported keys to a Jest config in your package.json.

Supported overrides:
 - [`collectCoverageFrom`](https://facebook.github.io/jest/docs/en/configuration.html#collectcoveragefrom-array)
 - [`coverageReporters`](https://facebook.github.io/jest/docs/en/configuration.html#coveragereporters-array-string)
 - [`coverageThreshold`](https://facebook.github.io/jest/docs/en/configuration.html#coveragethreshold-object)
 - [`snapshotSerializers`](https://facebook.github.io/jest/docs/en/configuration.html#snapshotserializers-array-string)

Example package.json:

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

By default `npm test` runs the watcher with interactive CLI. However, you can force it to run tests once and finish the process by setting an environment variable called `CI`.

When creating a build of your application with `npm run build` linter warnings are not checked by default. Like `npm test`, you can force the build to perform a linter warning check by setting the environment variable `CI`. If any warnings are encountered then the build fails.

Popular CI servers already set the environment variable `CI` by default but you can do this yourself too:

### On CI servers
#### Travis CI

1. Following the [Travis Getting started](https://docs.travis-ci.com/user/getting-started/) guide for syncing your GitHub repository with Travis.  You may need to initialize some settings manually in your [profile](https://travis-ci.org/profile) page.
1. Add a `.travis.yml` file to your git repository.
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
1. Trigger your first build with a git push.
1. [Customize your Travis CI Build](https://docs.travis-ci.com/user/customizing-the-build/) if needed.

#### CircleCI

Follow [this article](https://medium.com/@knowbody/circleci-and-zeits-now-sh-c9b7eebcd3c1) to set up CircleCI with a Create React App project.

### On your own environment
##### Windows (cmd.exe)

```cmd
set CI=true&&npm test
```

```cmd
set CI=true&&npm run build
```

(Note: the lack of whitespace is intentional.)

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

The test command will force Jest to run tests once instead of launching the watcher.

>  If you find yourself doing this often in development, please [file an issue](https://github.com/facebookincubator/create-react-app/issues/new) to tell us about your use case because we want to make watcher the best experience and are open to changing how it works to accommodate more workflows.

The build command will check for linter warnings and fail if any are found.

### Disabling jsdom

By default, the `package.json` of the generated project looks like this:

```js
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom"
```

If you know that none of your tests depend on [jsdom](https://github.com/tmpvar/jsdom), you can safely remove `--env=jsdom`, and your tests will run faster:

```diff
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
-   "test": "react-scripts test --env=jsdom"
+   "test": "react-scripts test"
```

To help you make up your mind, here is a list of APIs that **need jsdom**:

* Any browser globals like `window` and `document`
* [`ReactDOM.render()`](https://facebook.github.io/react/docs/top-level-api.html#reactdom.render)
* [`TestUtils.renderIntoDocument()`](https://facebook.github.io/react/docs/test-utils.html#renderintodocument) ([a shortcut](https://github.com/facebook/react/blob/34761cf9a252964abfaab6faf74d473ad95d1f21/src/test/ReactTestUtils.js#L83-L91) for the above)
* [`mount()`](http://airbnb.io/enzyme/docs/api/mount.html) in [Enzyme](http://airbnb.io/enzyme/index.html)

In contrast, **jsdom is not needed** for the following APIs:

* [`TestUtils.createRenderer()`](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering) (shallow rendering)
* [`shallow()`](http://airbnb.io/enzyme/docs/api/shallow.html) in [Enzyme](http://airbnb.io/enzyme/index.html)

Finally, jsdom is also not needed for [snapshot testing](http://facebook.github.io/jest/blog/2016/07/27/jest-14.html).

### Snapshot Testing

Snapshot testing is a feature of Jest that automatically generates text snapshots of your components and saves them on the disk so if the UI output changes, you get notified without manually writing any assertions on the component output. [Read more about snapshot testing.](http://facebook.github.io/jest/blog/2016/07/27/jest-14.html)

### Editor Integration

If you use [Visual Studio Code](https://code.visualstudio.com), there is a [Jest extension](https://github.com/orta/vscode-jest) which works with Create React App out of the box. This provides a lot of IDE-like features while using a text editor: showing the status of a test run with potential fail messages inline, starting and stopping the watcher automatically, and offering one-click snapshot updates.

![VS Code Jest Preview](https://cloud.githubusercontent.com/assets/49038/20795349/a032308a-b7c8-11e6-9b34-7eeac781003f.png)

## Debugging Tests

There are various ways to setup a debugger for your Jest tests. We cover debugging in Chrome and [Visual Studio Code](https://code.visualstudio.com/).

>Note: debugging tests requires Node 8 or higher.

### Debugging Tests in Chrome

Add the following to the `scripts` section in your project's `package.json`
```json
"scripts": {
    "test:debug": "react-scripts --inspect-brk test --runInBand --env=jsdom"
  }
```
Place `debugger;` statements in any test and run:
```bash
$ npm run test:debug
```

This will start running your Jest tests, but pause before executing to allow a debugger to attach to the process.

Open the following in Chrome
```
about:inspect
```

After opening that link, the Chrome Developer Tools will be displayed. Select `inspect` on your process and a breakpoint will be set at the first line of the react script (this is done simply to give you time to open the developer tools and to prevent Jest from executing before you have time to do so). Click the button that looks like a "play" button in the upper right hand side of the screen to continue execution. When Jest executes the test that contains the debugger statement, execution will pause and you can examine the current scope and call stack.

>Note: the --runInBand cli option makes sure Jest runs test in the same process rather than spawning processes for individual tests. Normally Jest parallelizes test runs across processes but it is hard to debug many processes at the same time.

### Debugging Tests in Visual Studio Code

Debugging Jest tests is supported out of the box for [Visual Studio Code](https://code.visualstudio.com).

Use the following [`launch.json`](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations) configuration file:
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

Usually, in an app, you have a lot of UI components, and each of them has many different states.
For an example, a simple button component could have following states:

* In a regular state, with a text label.
* In the disabled mode.
* In a loading state.

Usually, it’s hard to see these states without running a sample app or some examples.

Create React App doesn’t include any tools for this by default, but you can easily add [Storybook for React](https://storybook.js.org) ([source](https://github.com/storybooks/storybook)) or [React Styleguidist](https://react-styleguidist.js.org/) ([source](https://github.com/styleguidist/react-styleguidist)) to your project. **These are third-party tools that let you develop components and see all their states in isolation from your app**.

![Storybook for React Demo](http://i.imgur.com/7CIAWpB.gif)

You can also deploy your Storybook or style guide as a static app. This way, everyone in your team can view and review different states of UI components without starting a backend server or creating an account in your app.

### Getting Started with Storybook

Storybook is a development environment for React UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

First, install the following npm package globally:

```sh
npm install -g @storybook/cli
```

Then, run the following command inside your app’s directory:

```sh
getstorybook
```

After that, follow the instructions on the screen.

Learn more about React Storybook:

* Screencast: [Getting Started with React Storybook](https://egghead.io/lessons/react-getting-started-with-react-storybook)
* [GitHub Repo](https://github.com/storybooks/storybook)
* [Documentation](https://storybook.js.org/basics/introduction/)
* [Snapshot Testing UI](https://github.com/storybooks/storybook/tree/master/addons/storyshots) with Storybook + addon/storyshot

### Getting Started with Styleguidist

Styleguidist combines a style guide, where all your components are presented on a single page with their props documentation and usage examples, with an environment for developing components in isolation, similar to Storybook. In Styleguidist you write examples in Markdown, where each code snippet is rendered as a live editable playground.

First, install Styleguidist:

```sh
npm install --save react-styleguidist
```

Alternatively you may use `yarn`:

```sh
yarn add react-styleguidist
```

Then, add these scripts to your `package.json`:

```diff
   "scripts": {
+    "styleguide": "styleguidist server",
+    "styleguide:build": "styleguidist build",
     "start": "react-scripts start",
```

Then, run the following command inside your app’s directory:

```sh
npm run styleguide
```

After that, follow the instructions on the screen.

Learn more about React Styleguidist:

* [GitHub Repo](https://github.com/styleguidist/react-styleguidist)
* [Documentation](https://react-styleguidist.js.org/docs/getting-started.html)

## Publishing Components to npm

Create React App doesn't provide any built-in functionality to publish a component to npm. If you're ready to extract a component from your project so other people can use it, we recommend moving it to a separate directory outside of your project and then using a tool like [nwb](https://github.com/insin/nwb#react-components-and-libraries) to prepare it for publishing.

## Making a Progressive Web App

By default, the production build is a fully functional, offline-first
[Progressive Web App](https://developers.google.com/web/progressive-web-apps/).

Progressive Web Apps are faster and more reliable than traditional web pages, and provide an engaging mobile experience:

 * All static site assets are cached so that your page loads fast on subsequent visits, regardless of network connectivity (such as 2G or 3G). Updates are downloaded in the background.
 * Your app will work regardless of network state, even if offline. This means your users will be able to use your app at 10,000 feet and on the subway.
 * On mobile devices, your app can be added directly to the user's home screen, app icon and all. You can also re-engage users using web **push notifications**. This eliminates the need for the app store.

The [`sw-precache-webpack-plugin`](https://github.com/goldhand/sw-precache-webpack-plugin)
is integrated into production configuration,
and it will take care of generating a service worker file that will automatically
precache all of your local assets and keep them up to date as you deploy updates.
The service worker will use a [cache-first strategy](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network)
for handling all requests for local assets, including the initial HTML, ensuring
that your web app is reliably fast, even on a slow or unreliable network.

### Opting Out of Caching

If you would prefer not to enable service workers prior to your initial
production deployment, then remove the call to `registerServiceWorker()`
from [`src/index.js`](src/index.js).

If you had previously enabled service workers in your production deployment and
have decided that you would like to disable them for all your existing users,
you can swap out the call to `registerServiceWorker()` in
[`src/index.js`](src/index.js) first by modifying the service worker import:
```javascript
import { unregister } from './registerServiceWorker';
```
and then call `unregister()` instead.
After the user visits a page that has `unregister()`,
the service worker will be uninstalled. Note that depending on how `/service-worker.js` is served,
it may take up to 24 hours for the cache to be invalidated.

### Offline-First Considerations

1. Service workers [require HTTPS](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers#you_need_https),
although to facilitate local testing, that policy
[does not apply to `localhost`](http://stackoverflow.com/questions/34160509/options-for-testing-service-workers-via-http/34161385#34161385).
If your production web server does not support HTTPS, then the service worker
registration will fail, but the rest of your web app will remain functional.

1. Service workers are [not currently supported](https://jakearchibald.github.io/isserviceworkerready/)
in all web browsers. Service worker registration [won't be attempted](src/registerServiceWorker.js)
on browsers that lack support.

1. The service worker is only enabled in the [production environment](#deployment),
e.g. the output of `npm run build`. It's recommended that you do not enable an
offline-first service worker in a development environment, as it can lead to
frustration when previously cached assets are used and do not include the latest
changes you've made locally.

1. If you *need* to test your offline-first service worker locally, build
the application (using `npm run build`) and run a simple http server from your
build directory. After running the build script, `create-react-app` will give
instructions for one way to test your production build locally and the [deployment instructions](#deployment) have
instructions for using other methods. *Be sure to always use an
incognito window to avoid complications with your browser cache.*

1. If possible, configure your production environment to serve the generated
`service-worker.js` [with HTTP caching disabled](http://stackoverflow.com/questions/38843970/service-worker-javascript-update-frequency-every-24-hours).
If that's not possible—[GitHub Pages](#github-pages), for instance, does not
allow you to change the default 10 minute HTTP cache lifetime—then be aware
that if you visit your production site, and then revisit again before
`service-worker.js` has expired from your HTTP cache, you'll continue to get
the previously cached assets from the service worker. If you have an immediate
need to view your updated production deployment, performing a shift-refresh
will temporarily disable the service worker and retrieve all assets from the
network.

1. Users aren't always familiar with offline-first web apps. It can be useful to
[let the user know](https://developers.google.com/web/fundamentals/instant-and-offline/offline-ux#inform_the_user_when_the_app_is_ready_for_offline_consumption)
when the service worker has finished populating your caches (showing a "This web
app works offline!" message) and also let them know when the service worker has
fetched the latest updates that will be available the next time they load the
page (showing a "New content is available; please refresh." message). Showing
this messages is currently left as an exercise to the developer, but as a
starting point, you can make use of the logic included in [`src/registerServiceWorker.js`](src/registerServiceWorker.js), which
demonstrates which service worker lifecycle events to listen for to detect each
scenario, and which as a default, just logs appropriate messages to the
JavaScript console.

1. By default, the generated service worker file will not intercept or cache any
cross-origin traffic, like HTTP [API requests](#integrating-with-an-api-backend),
images, or embeds loaded from a different domain. If you would like to use a
runtime caching strategy for those requests, you can [`eject`](#npm-run-eject)
and then configure the
[`runtimeCaching`](https://github.com/GoogleChrome/sw-precache#runtimecaching-arrayobject)
option in the `SWPrecacheWebpackPlugin` section of
[`webpack.config.prod.js`](../config/webpack.config.prod.js).

### Progressive Web App Metadata

The default configuration includes a web app manifest located at
[`public/manifest.json`](public/manifest.json), that you can customize with
details specific to your web application.

When a user adds a web app to their homescreen using Chrome or Firefox on
Android, the metadata in [`manifest.json`](public/manifest.json) determines what
icons, names, and branding colors to use when the web app is displayed.
[The Web App Manifest guide](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/)
provides more context about what each field means, and how your customizations
will affect your users' experience.

## Analyzing the Bundle Size

[Source map explorer](https://www.npmjs.com/package/source-map-explorer) analyzes
JavaScript bundles using the source maps. This helps you understand where code
bloat is coming from.

To add Source map explorer to a Create React App project, follow these steps:

```sh
npm install --save source-map-explorer
```

Alternatively you may use `yarn`:

```sh
yarn add source-map-explorer
```

Then in `package.json`, add the following line to `scripts`:

```diff
   "scripts": {
+    "analyze": "source-map-explorer build/static/js/main.*",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test --env=jsdom",
```

Then to analyze the bundle run the production build then run the analyze
script.

```
npm run build
npm run analyze
```

## Deployment

`npm run build` creates a `build` directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served `index.html`, and requests to static paths like `/static/js/main.<hash>.js` are served with the contents of the `/static/js/main.<hash>.js` file.

### Static Server

For environments using [Node](https://nodejs.org/), the easiest way to handle this would be to install [serve](https://github.com/zeit/serve) and let it handle the rest:

```sh
npm install -g serve
serve -s build
```

The last command shown above will serve your static site on the port **5000**. Like many of [serve](https://github.com/zeit/serve)’s internal settings, the port can be adjusted using the `-p` or `--port` flags.

Run this command to get a full list of the options available:

```sh
serve -h
```

### Other Solutions

You don’t necessarily need a static server in order to run a Create React App project in production. It works just as fine integrated into an existing dynamic one.

Here’s a programmatic example using [Node](https://nodejs.org/) and [Express](http://expressjs.com/):

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

The choice of your server software isn’t important either. Since Create React App is completely platform-agnostic, there’s no need to explicitly use Node.

The `build` folder with static assets is the only output produced by Create React App.

However this is not quite enough if you use client-side routing. Read the next section if you want to support URLs like `/todos/42` in your single-page app.

### Serving Apps with Client-Side Routing

If you use routers that use the HTML5 [`pushState` history API](https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries) under the hood (for example, [React Router](https://github.com/ReactTraining/react-router) with `browserHistory`), many static file servers will fail. For example, if you used React Router with a route for `/todos/42`, the development server will respond to `localhost:3000/todos/42` properly, but an Express serving a production build as above will not.

This is because when there is a fresh page load for a `/todos/42`, the server looks for the file `build/todos/42` and does not find it. The server needs to be configured to respond to a request to `/todos/42` by serving `index.html`. For example, we can amend our Express example above to serve `index.html` for any unknown paths:

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
