---
layout: page
title: Package suggestions
---

This page collects suggested packages with relevant information about them.

Larger packages
---------------

- [Mosh](https://mosh.mit.edu/) is a remote terminal application that allows roaming, supports intermittent connectivity, and provides intelligent local echo and line editing of user keystrokes. Really interesting to get running. There exists a [disabled package which may be built and run](https://github.com/termux/termux-packages/blob/master/disabled-packages/mosh/build.sh) but which unfortunately [crashes with a locale-related error](https://github.com/termux/termux-packages/blob/master/disabled-packages/mosh/BROKEN.txt).

- [Mono](http://www.mono-project.com/) is an open source implementation of Microsoft's .NET Framework.
    - [Mono on ARM information](http://www.mono-project.com/docs/about-mono/supported-platforms/arm/)
    - [Stackoverflow post about cross compiling to Android ARM](http://stackoverflow.com/questions/17941856/compile-mono-for-android-arm7)
    - [Stackoverflow post about cross compiling to Android x86](http://stackoverflow.com/questions/27438837/how-to-cross-compile-mono-for-x86-android)


- [GNAT](https://www.gnu.org/software/gnat/) is a free-software compiler for the Ada programming language which forms part of the GNU Compiler Collection. It supports all versions of the language, i.e. Ada 2012, Ada 2005, Ada 95 and Ada 83.

- [Julia](http://julialang.org/) is a high-level, high-performance dynamic programming language for technical computing, with syntax that is familiar to users of other technical computing environments.

- [OpenJDK](http://openjdk.java.net/) is a free and open source implementation of the Java Platform.

- [Racket](http://racket-lang.org/) is a full-spectrum programming language.

- [Avahi](http://www.avahi.org/) is a free zero-configuration networking (zeroconf) implementation, including a system for multicast DNS/DNS-SD service discovery.

- [GHC](https://www.haskell.org/ghc/) is the Glasgow Haskell Compiler. See [the upcoming 8.x release](https://ghc.haskell.org/trac/ghc/wiki/Status/GHC-8.0.1) and [changing to llvm 3.7](https://ghc.haskell.org/trac/ghc/ticket/10953) there.

- [TeX Live](http://tug.org/texlive/) is an easy way to get up and running with the TeX document production system.

- [Redis](http://redis.io/) is a in-memory data structure store used as database, cache and message broker.

Smaller packages
----------------

- [mitmproxy](https://mitmproxy.org/) is interactive console program that allows traffic flows to be intercepted, inspected, modified and replayed.

- [get-flash-videos](https://github.com/monsieurvideo/get-flash-videos) is a perl program for downloading or playing videos from various Flash-based video hosting sites, without having to use the Flash player.

- [Duplicity](http://duplicity.nongnu.org/) backs directories by producing encrypted tar-format volumes and uploading them to a remote or local file server. Will need required python packages (with native bindings).

- [Unison](https://www.cis.upenn.edu/~bcpierce/unison/) is a file synchronization tool. Written in OCaml.
