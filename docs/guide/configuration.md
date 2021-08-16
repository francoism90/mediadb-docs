# Configuration and Usage

## Importing files

```bash
cd /var/www/html/api
php artisan video:import /path/to/import
```

## Optimizing

```bash
cd /var/www/html/api
composer install --optimize-autoloader --no-dev
php artisan optimize
```

### Modules

<https://github.com/kaltura/nginx-vod-module#performance-recommendations>
