# Тестовое задание от AB Test Real

[Вакансия](https://hh.ru/vacancy/46315185 "Front-end разработчик React")  
[Задание](https://docs.google.com/document/d/1Yc9SsrYwjll_oeZJUikbJY7q4Qe3pmqAd9PFbhMgVbY/edit "Задание")  
_[Ссылка на приложение](http://178.128.136.91/ "Приложение")_

<p>
  <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript"><img src="readme/icon-js.svg" alt="JS"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://www.typescriptlang.org/"><img src="readme/icon-ts.svg" alt="TS"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://ru.reactjs.org/"><img src="readme/icon-react.svg" alt="React"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://redux.js.org/"><img src="readme/icon-redux.svg" alt="Redux"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://www.chartjs.org/"><img src="readme/icon-chart.svg" alt="ChartJs"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://yarnpkg.com/"><img src="readme/icon-yarn.svg" alt="Yarn"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://webpack.js.org/"><img src="readme/icon-webpack.svg" alt="WebPack"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://nodejs.org/ru/docs/"><img src="readme/icon-node.svg" alt="NodeJS"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://ru.wikipedia.org/wiki/REST"><img src="readme/icon-api.svg" alt="REST API"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://expressjs.com/ru/"><img src="readme/icon-express.svg" alt="ExpressJS"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://habr.com/ru/post/564390/"><img src="readme/icon-sql.svg" alt="SQL"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://www.postgresql.org/"><img src="readme/icon-pg.svg" alt="PostgreSQL"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://styled-components.com/"><img src="readme/icon-styled-components.svg" alt="Styled-components"></a>
</p>

## Задание

Сделать одностраничное приложение на React + NodeJS + PostgreSQL.  
Пользователь заполняет таблицу на веб-странице и вводит даты для пользователей некоторой системы в некоем формате.

По кнопке Save данные сохраняются в реляционную БД.

По кнопке Calculate:

- рассчитывается и выводится метрика с названием "Rolling Retention 7 day";
- рисуется гистограмма распределения длительностей жизней пользователей.

_[Макет](https://www.figma.com/file/QiNnIWCBeOGxhmrXN2UILQ/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81-Copy?node-id=0%3A1 "Ссылка на Фигму")_

Приложение задеплоить любым удобным способом, чтобы был общедоступный URL к нему.

### Задачи проекта

Демонстрация компетенций в соответствии с тестовым заданием.

## Функциональность получившегося приложения

В соответствии с заданием.  
Также:

- проработан UX;
- используется css-in-js библиотека [styled-components](https://styled-components.com/ "Документация");
- [приложение задеплоено](http://178.128.136.91/ "Выполненое тестовое задание");
- страница адаптируется в пределах 700-1334px.

## Возможные улучшения

- разделить конфиг БД, апи и инициализацию сервера;
- убрать хардкод в коде настроек подлкючения к БД, вынести в конфиг-файл;
- работу с БД реализовать через генератор sql-запросов или через ORM;
- доработать UX (`hover`'ы).

## Директории

`/server` — backend;  
`/web` — frontend;  
`/readme` — папка с иконками стека;

## Как использовать

Установка сопутствующих библиотек:  
`yarn`

Сборка фронтенда:  
`yarn build`

Локальный запуск бэкенда и фронтенда:  
`yarn start`

Запуск бэкенда с hot-reload:  
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
