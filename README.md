
# Client-server-portfolio

Репозиторий клиентской части дипломного проекта – сервиса конструктора портфолио для IT-специалистов.


## Локальный запуск

Склонировать репозиторий

```bash
  git clone https://github.com/ghostITwe/client-constructor-portfolio.git
```

Перейти в директорию проекта

```bash
  cd client-constructor-portfolio
```

Установить необходимые зависимости

```bash
  npm i
```

## Переменные среды

Чтобы корректно запустился проект, необходимо измениться `.env.example` на `.env`, после чего ввести нужные значения

`VITE_BASE_URL` - `URL вашей серверной части`


### Запуск

#### Режим разработки

```bash
  svelte-kit dev
```

#### Режим сборки

```bash
  svelte-kit build
```