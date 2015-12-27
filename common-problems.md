---
layout: page
title: Common problems
---

#### Unable to install package ...

This error either means that the package is not available (use `apt list` or `apt search` to find available ones) or that the initial package list needs to be fetched (which is done with `apt update`).

#### CANNOT LINK EXECUTABLE: cannot locate symbol "..." referenced by "..."

This error probably means that you are trying to execute a system binary (in a folder like /system/bin/) instead of a Termux executable - check that by executing `which CMD`, which should result in a path under `/data/data/com.termux/files/usr/bin/` for a Termux binary, and a path under `/system/` for a system binary. Common binaries supplied on some devices are `curl`, `ssh`, `nano` and `vim`.

The cause of this error is that Termux sets up the `LD_LIBRARY_PATH` environment variable to point at `$PREFIX/lib` in order for Termux-supplied binaries to link against correct Termux-supplied shared libraries. Unfortunately this may confuse system binaries which expects to link against different shared libraries in `/system/lib(64)`, but instead find incompatible ones under `$PREFIX/lib`.

For many binaries the best solution is to install them from Termux packages (e.g. `apt install openssh`) instead of using the system ones, since the Termux packages are normally more up to date. Note that when doing this in a session where you previously executed a system binary, bash may cache the path to the previous executable even after installing a Termux package. Solve that by executing hash -r to clear the path cache in bash for the existing session.

Alternatively, if you do not want to install the Termux package (or you want to use a system binary which does not exist as a package), you may clear the `LD_LIBRARY_PATH` variable before running a binary:

    LD_LIBRARY_PATH= CMD [ARGS]

