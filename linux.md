---
layout: page
title: Termux and Linux
---

The environment setup in Termux is similar to that of a modern Linux distribution. However, running on Android implies several important differences:

- Common folders such as /bin, /usr/, /var and /etc does not exist.
- The Android system provides a basic non-standard file system hierarchy, where e.g. /system/bin contains some system binaries.
- The user folder `$HOME` is inside the private file area exposed to Termux as an ordinary Android app. Uninstalling Termux will cause this file area to be wiped - so save important files outside this area such as in /sdcard or use a version control system such as git.
- Termux installs its packages in a folder exposed through the `$PREFIX` environment variable (with e.g. binaries in `$PREFIX/bin`, and configuration in `$PREFIX/etc`).
- The normal `#!/usr/bin/...` she-bangs will not work. Use the `termux-fix-shebang` script to modify these files before executing.
- Shared libraries are installed in `$PREFIX/lib`, which are available from binaries due to Termux setting the `$LD_LIBRARY_PATH` environment variable. These may clash with Android system binaries in /system/bin, which may force `LD_LIBRARY_PATH` to be cleared before running system binaries.
- Besides the file system being different, Termux is running as a single-user system without root - each Android app is running as its own Linux user, so running commands inside Termux may not interfere with other installed applications.

Running as non-root implies that ports below 1024 cannot be bound to. Many packages have been configured to have compatible default values - the ftpd, httpd, and sshd servers default to 8021, 8080 and 8022, respectively.


