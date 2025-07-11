# Едамания - сервис доставки еды с ресторанов и магазинов

## О проекте

Проект разработан для учебных целей, подробнее изучить next.js

## Деплой

### Хардкор

### Docker (лёгкий и простой)

- клонируем репо к себе на компутахтер/сервер
  <br/><code>$ git clone <ссылка на репо></code>
- накатываем если собираем для прод версии
  <br/><code>$ docker-compose -f ./docker/docker-compose.prod.yaml up -d</code>
- для дев версии
  <br/><code>$ docker-compose -f ./docker/docker-compose.dev.yaml up -d</code>
- для mock версии (демку показать)
  <br/><code>$ docker-compose -f ./docker/docker-compose.mock.yaml up -d</code>
