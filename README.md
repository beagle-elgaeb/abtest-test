# Тестовое задание от AB Test Real

_[Ссылка на GH Pages](https://beagle-elgaeb.github.io/abtest-test/ "Этот проект на GH Pages")_

<p>
  <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript"><img src="readme/icon-js.svg" alt="JS"></a>
  <img src="readme/icon-whitespace-5px.svg"/>
    <a href="https://www.typescriptlang.org/"><img src="readme/icon-ts.svg" alt="TS"></a>
  <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://npmjs.com/"><img src="readme/icon-npm.svg" alt="NPM"></a>
  <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://webpack.js.org/"><img src="readme/icon-webpack.svg" alt="WebPack"></a>
  <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://nodejs.org/ru/docs/"><img src="readme/icon-node.svg" alt="NodeJS"></a>
  <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://expressjs.com/ru/"><img src="readme/icon-express.svg" alt="ExpressJS"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://habr.com/ru/post/564390/"><img src="readme/icon-sql.svg" alt="SQL"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://www.postgresql.org/"><img src="readme/icon-pg.svg" alt="PostgreSQL"></a>
</p>

## Задание

Сделать одностраничное приложение на React + NodeJS + PostgreSQL.  
Пользователь заполняет таблицу на веб-странице и вводит даты для пользователей некоторой системы в некоем формате.

По кнопке Save данные сохраняются в реляционную БД.

По кнопке Calculate:

- рассчитывается и выводится метрика с названием "Rolling Retention 7 day";
- рисуется гистограмма распределения длительностей жизней пользователей.

_[UI-элементы нужно взять тут](https://www.figma.com/file/QiNnIWCBeOGxhmrXN2UILQ/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81-Copy?node-id=0%3A1 "Ссылка на Фигму")_

Приложение задеплоить любым удобным способом, чтобы был общедоступный URL к нему.

## Функциональность получившегося приложения

- загружаются с сервера ранее сохранённые данные;
- по кнопке `+ Add one more` добавляются поля вввода;
- по кнопке `Save` новые введённые данные сохраняются на сервере;
- по кнопке `Calculate` производится рассчёт метрики "Rolling Retention 7 day" и построение гистограммы распределения длительностей жизней пользователей;
- страница адаптируется в пределах 700px - 1334px;

## Возможные улучшения

- UX
- Базовая валидация
- Кнопки удаления лишних строк

## Директории

`/server` — backend  
`/web` — frontend  
`/readme` — стек

## Как использовать

Сборка приложения:  
`yarn build`

Запуск сервера и приложения:  
`yarn start`

Запуск сервера с hot-reload:  
`yarn dev`

---

## Связаться со мной

<p>
  <a href="https://t.me/evgevgevge"><img src="readme/icon-tg.svg" alt="Telegram"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="mailto:beagle-elgaeb@ya.ru"><img src="readme/icon-mail.svg" alt="Mail"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://www.instagram.com/evg._.su/"><img src="readme/icon-inst.svg" alt="Instagram"></a>
</p>
