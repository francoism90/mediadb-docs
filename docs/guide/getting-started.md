# Getting Started

## Prerequisites

- [nginx](https://nodejs.org/)
- [nginx-vod-module](https://github.com/kaltura/nginx-vod-module)
- [nginx-secure-token-module](https://github.com/kaltura/nginx-secure-token-module)
- [FFmpeg](https://www.ffmpeg.org/)
- [PHP 8+](https://www.php.net/)
- [MariaDB](https://mariadb.org/) or [MySQL](https://www.mysql.com/)
- [MeiliSearch](https://www.meilisearch.com/)
- [Soketi](https://github.com/soketi/soketi)
- [Supervisor](http://supervisord.org/)

::: tip

- [Laravel Sail](https://laravel.com/docs/9.x/sail) is included, providing a Docker compatible development environment.
- [Laravel Octane](https://laravel.com/docs/9.x/octane) is optional, but highly recommended.
  :::

## Installation

This section will help you setup a basic MediaDB API from ground up.

- **Step 1**: Configure environment

Setup a basic environment using the [given examples](https://github.com/francoism90/mediadb/tree/master/doc).

- **Step 2**: Clone the repository

```bash
cd /var/www/html
git clone git@github.com:francoism90/mediadb.git api
```

- **Step 3**: Initialize Laravel

```bash
cd api
cp .env.example .env
vi .env
composer install
php artisan key:generate
php artisan horizon:install
php artisan telescope:install
php artisan migrate --seed
php artisan storage:link
php artisan scout:create-indexes
```

::: tip

- Replace `.env.example` with `.env.sail.example` to configure Laravel Sail.
- Replace `vi` with your favorite editor.
- Check all configuration files and change them when necessary, especially `.env`, `config/api.php` and `config/filesystems.php`.
  :::

- **Step 4**: Configure Laravel & nginx

Update `.env`:

```bash
DASH_URL=https://mediadb.test
DASH_KEY=d5460ef7a5c2bece2d1b24e0d9959e5ea9beb9dd449080147bdba001e9106793
DASH_IV=722d4f9191c53d5e934e13719d02cced
```

Update `/etc/nginx/sites/mediadb-vod.conf`:

```bash
vod_base_url "https://mediadb.test";
vod_segments_base_url "https://mediadb.test";
vod_secret_key "randomstring-$vod_filepath";

secure_token_encrypt_uri_key d5460ef7a5c2bece2d1b24e0d9959e5ea9beb9dd449080147bdba001e9106793;
secure_token_encrypt_uri_iv 722d4f9191c53d5e934e13719d02cced;
```

::: tip

- One may use `dd if=/dev/urandom bs=1 count=32 2> /dev/null | xxd -p -c32` to generate the `DASH_KEY`/`DASH_IV` values.
  :::

MediaDB will now listen at [https://localhost:3000](https://localhost:3000) and [https://mediadb.test/api](https://mediadb.test/api).

By now, you should have a basic but functional MediaDB API. Next, learn about the basics of [configuration and usage](configuration.md) of MediaDB.
