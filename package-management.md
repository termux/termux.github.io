---
layout: page
title: Package management
---

A minimal base system consisting of the Apt package manager and the busybox collection of system utilities is installed when first starting Termux. Additional packages are available using the apt command:

`apt update`
: Updates the list of available packages. This commands **needs to be run initially directly after installation and regularly afterwards to receive updates**.

`apt search <query>`
: Search among available packages.

`apt install <package>`
: Install a new package.

`apt upgrade`
: Upgrade outdated packages. For Apt to know about newer packages you will need to update the package index, so you will normally want to run apt update before upgrading.

`apt show <package>`
: Show information about a package.

`apt list`
: List all available packages.

`apt list --installed`
: List all installed packages.

`apt remove <package>`
: Remove an installed package.

Apt as a package manager uses a package format named dpkg. Normally direct use of dpkg is not necessary, but the following two commands may be of use:

`dpkg -L <package>`
: List installed files of a package.

`dpkg --verify`
: Verify the integrity of installed packages.

View the apt manual page (execute `apt install man` to install a man page viewer first) for more information.


