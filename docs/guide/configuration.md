# Configuration and Usage

## Import files

```bash
cd /var/www/html/api
php artisan video:import /path/to/import
```

::: tip

- Make sure files in the import and destination path are writeable by the running user, e.g. `http`/`www-data`.
- Make sure videos can be played in the browser/target device as they aren't being encoded (yet).
- Make sure there is enough space on the disk to import and process the media.
- See `app/Console/Commands/Video/ImportCommand.php` for more details.
  :::

## Optimizing

```bash
cd /var/www/html/api
composer install --optimize-autoloader --no-dev
php artisan optimize
```

### Modules

[nginx-vod-module](https://github.com/kaltura/nginx-vod-module#performance-recommendations)
