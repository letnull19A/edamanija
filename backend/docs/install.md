<a href='./readme.md'>На главную</a>

# запуск приложения

# <img src='./static/postgresql-svgrepo-com.svg' width='25'/> <span style='position: relative; top: -5px;'>настраиваем postgres</span>

в папке postgres сдалть папку data если отсутствует

# <img src='./static/nodejs-icon-logo-svgrepo-com.svg' width='25'/> <span style='position: relative; top: -5px;'>тесты запустить на локальной машине (без docker)</span>

## устанавливаем пакеты

### <img src='./static/light-pnpm-svgrepo-com.svg' width='25' /> <span style='position: relative; top: -8px;'>pnpm</span>

```sh
pnpm install
```

### <img src='./static/yarn-svgrepo-com.svg' width='25'/> <span style='position: relative; top: -8px;'>yarn</span>

```sh
yarn
```

### <img src='./static/npm-svgrepo-com.svg' width='25'/> <span style='position: relative; top: -8px;'>npm</span>

```sh
npm install
```

## настраиваем конфигурации

```sh
cp envs/.env.test .env
```

## собираем проект

```sh
pnpm build:test
```

## запускаем тесты

очистка кеша

```sh
pnpm test:clear-cache
```

запуск тестов

```sh
pnpm test:pre-release
```

# <img src='./static/docker-svgrepo-com.svg' width="25"> <span style='position: relative; top: -5px;'>тесты через docker</span>

## запускаем

в корне всего проекта

```sh
docker compose -f 'docker-compose.test.yaml' up -d --build 'edamanija_backend_test'
```
