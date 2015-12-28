---
layout: page
title: Internal and external storage
---

There are three main types of storage in Termux:

1. App-private storage: Files put in `$HOME`, available from inside Termux (or when explictly picked, when e.g. attaching a file to a mail).
2. Shared internal storage: Storage in the device available to all apps. On Android 6.0 this requires the user to explicitly grant access to
for Termux to access it.
3. External storage: Storage on external SD cards. Each app has a private folder on the external SD card, and interchange between them needs
to use a special API not yet available in Termux.

Executing `termux-setup-storage` (run `apt update && apt upgrade` to ensure that this tool is available) ensures:

1. That permission to shared storage is granted to Termux when running on Android 6.0 or later.
2. That an app-private folder on external storage is created (if external storage exists).
3. That a folder `$HOME/storage` is created.

The contents of the created `$HOME/storage` folder are symlinks to different storage folders:

`~/storage/shared`
: The root of the shared storage between all apps.

`~/storage/downloads`
: The standard directory for downloads from e.g. the system browser.

`~/storage/dcim`
: The traditional location for pictures and videos when mounting the device as a camera.

`~/storage/pictures`
: Standard directory in which to place pictures that are available to the user.

`~/storage/music`
: Standard directory in which to place any audio files that should be in the regular list of music for the user.

`~/storage/movies`
: Standard directory in which to place movies that are available to the user.

`~/storage/external`
: Symlink to a Termux-private folder on external storage (only if external storage is available).
