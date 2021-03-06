# Upgrading

Because there are many breaking changes an upgrade is not that easy. There are many edge cases this guide does not cover. We accept PRs to improve this guide.

## API

```bash
cd /var/www/html/api
git pull
composer install
php artisan migrate
php artisan optimize
php artisan scout:create-indexes
php artisan scout:sync
php artisan video:regenerate
```

::: tip

- Remember to restart services like `nginx` & `supervisor` and flush caches.
- Run `php artisan octane:reload` after each upgrade for [Laravel Octane](https://laravel.com/docs/9.x/octane) to reload.
  :::

## App

To update the MediaDB app (including SPA/PWA):

```bash
cd /var/www/html/app
git pull
yarn install
quasar build
```

::: tip

Checkout the [mediadb-app](https://github.com/francoism90/mediadb-app) repository for more information.
:::
