# Getting Started

## Prerequisites

- [nginx](https://nodejs.org/)
- [nginx-vod-module](https://github.com/kaltura/nginx-vod-module)
- [nginx-secure-token-module](https://github.com/kaltura/nginx-secure-token-module)
- [FFmpeg](https://www.ffmpeg.org/)
- [PHP 8+](https://www.php.net/)
- [MariaDB](https://mariadb.org/) or [MySQL](https://www.mysql.com/)
- [MeiliSearch](https://www.meilisearch.com/) (Optional)

::: tip

- [Laravel Sail](https://laravel.com/docs/8.x/sail) is included, providing a Docker compatible development environment.
- Please consult the provided [configuration examples](https://github.com/francoism90/mediadb/tree/master/doc).
  :::

## Installation

This section will help you setup a basic MediaDB API from ground up.

- **Step 1**: Clone the repository

```bash
cd /var/www/html
git clone git@github.com:francoism90/mediadb.git api
```

- **Step 2**: Initialize Laravel

```bash
cd api
cp .env.example .env
vi .env
composer install
php artisan key:generate
php artisan horizon:install
php artisan telescope:install
php artisan migrate
php artisan storage:link
php artisan scout:create-indexes
php artisan db:seed
```

::: tip

- Replace `vi` with your favorite editor.
- Check all configuration files and change them when necessary, especially `.env`, `config/api.php` and `config/filesystems.php`.
  :::

- **Step 3**: Configure Laravel & nginx

```bash
dd if=/dev/urandom bs=1 count=32 2> /dev/null | xxd -p -c32
dd if=/dev/urandom bs=1 count=16 2> /dev/null | xxd -p -c32
```

Update `.env`:

```bash
VOD_URL=https://mediadb.test
VOD_KEY=d5460ef7a5c2bece2d1b24e0d9959e5ea9beb9dd449080147bdba001e9106793
VOD_IV=722d4f9191c53d5e934e13719d02cced
```

Update `sites/mediadb-vod.conf`:

```bash
vod_base_url "https://mediadb.test";
vod_segments_base_url "https://mediadb.test";

vod_secret_key "randomstring-$vod_filepath";

secure_token_encrypt_uri_key d5460ef7a5c2bece2d1b24e0d9959e5ea9beb9dd449080147bdba001e9106793;
secure_token_encrypt_uri_iv 722d4f9191c53d5e934e13719d02cced;
```

- **Step 4**: Import media files (videos, ..) to the library:

```bash
cd /var/www/html/api
php artisan video:import /path/to/import
```

::: tip

- Make sure files in the import and destination path are writeable by `http` (running user).
- Make sure videos can be played in the browser/target device as they aren't being encoded (yet).
- Make sure there is enough space on the disk to import and process the media.
- See `app/Console/Commands/Video/ImportCommand.php` for more details.
  :::

The MediaDB will now start a server at [https://localhost:3000](https://localhost:3000) and [https://mediadb.test/api](https://mediadb.test/api).

By now, you should have a basic but functional MediaDB API. Next, learn about the basics of [configuration](./configuration.md) in MediaDB API.
