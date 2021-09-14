# Configuration and Usage

## Importing Videos

This creates a video model for each file being imported:

```bash
cd /var/www/html/api
php artisan video:import /path/to/import user-id
```

::: tip

- Make sure files in the import and destination path are writeable by the running user, e.g. `http`/`www-data`.
- Make sure videos can be played in the browser/target device as they aren't being encoded (yet).
- Make sure there is enough space on the disk to import and process the media.
- See `app/Console/Commands/Video/ImportCommand.php` for details.
  :::

## Importing Captions

This creates a caption model for each file being imported:

```bash
cd /var/www/html/api
php artisan video:import-captions /path/to/import video-id
```

::: tip

- Make sure files in the import and destination path are writeable by the running user, e.g. `http`/`www-data`.
- Make sure caption files contain valid WebVTT as they aren't being validated (yet).
- See `app/Console/Commands/Video/ImportCaptionsCommand.php` for more details.
  :::

## Importing Clips

This creates a clip model for each file being imported:

```bash
cd /var/www/html/api
php artisan video:import-clips /path/to/import video-id
```

::: tip

- This can be used to provide multiple resolutions/bitrates of videos.
- Make sure files in the import and destination path are writeable by the running user, e.g. `http`/`www-data`.
- Make sure videos can be played in the browser/target device as they aren't being encoded (yet).
- Make sure there is enough space on the disk to import and process the media.
- See `app/Console/Commands/Video/ImportClipsCommand.php` for details.
  :::

## Optimizing

```bash
cd /var/www/html/api
composer install --optimize-autoloader --no-dev
php artisan optimize
```

### Modules

[nginx-vod-module](https://github.com/kaltura/nginx-vod-module#performance-recommendations)
