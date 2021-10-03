# Upgrading

Because there are many breaking changes an upgrade is not that easy. There are many edge cases this guide does not cover. We accept PRs to improve this guide.

## Laravel

```bash
cd /var/www/html/api
git pull
composer install
php artisan migrate
php artisan video:regenerate
```

### Scout

#### Recreate indexes

```bash
cd /var/www/html/api
php artisan scout:create-indexes -r
```

#### Re-index models

```bash
cd /var/www/html/api
php artisan scout:import "App\Models\Tag"
php artisan scout:import "App\Models\User"
php artisan scout:import "App\Models\Video"
```

## Quasar

```bash
cd /var/www/html/app
git pull
yarn install
quasar build
```

::: tip

See [mediadb-app](https://github.com/francoism90/mediadb-app) repository for more information.
  :::
