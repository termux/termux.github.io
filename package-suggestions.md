---
layout: post
title: Package suggestions
---

This page collects suggested packages with relevant information about them.

- [Mosh](https://mosh.mit.edu/) is a remote terminal application that allows roaming, supports intermittent connectivity, and provides intelligent local echo and line editing of user keystrokes. Really interesting to get running. There exists a [disabled package which may be built and run](https://github.com/termux/termux-packages/blob/master/disabled-packages/mosh/build.sh) but which unfortunately [crashes with a locale-related error](https://github.com/termux/termux-packages/blob/master/disabled-packages/mosh/BROKEN.txt).

- [Mono](http://www.mono-project.com/) is an open source implementation of Microsoft's .NET Framework.
    - [Mono on ARM information](http://www.mono-project.com/docs/about-mono/supported-platforms/arm/)
    - [Stackoverflow post about cross compiling to Android ARM](http://stackoverflow.com/questions/17941856/compile-mono-for-android-arm7)
    - [Stackoverflow post about cross compiling to Android x86](http://stackoverflow.com/questions/27438837/how-to-cross-compile-mono-for-x86-android)


- [PRoot](http://proot.me/) is a user-space implementation of chroot, mount --bind, and binfmt_misc. A [starting point for a package exists](https://github.com/termux/termux-packages/tree/master/disabled-packages/proot). Would allow things such as `#!/bin/sh` as well as installing packages from other Linux distributions.

- [GNAT](https://www.gnu.org/software/gnat/) is a free-software compiler for the Ada programming language which forms part of the GNU Compiler Collection. It supports all versions of the language, i.e. Ada 2012, Ada 2005, Ada 95 and Ada 83.

- [Julia](http://julialang.org/) is a high-level, high-performance dynamic programming language for technical computing, with syntax that is familiar to users of other technical computing environments.

- [OpenJDK](http://openjdk.java.net/) is a free and open source implementation of the Java Platform.

- [Racket](http://racket-lang.org/) is a full-spectrum programming language.

- [Avahi](http://www.avahi.org/) is a free zero-configuration networking (zeroconf) implementation, including a system for multicast DNS/DNS-SD service discovery.


