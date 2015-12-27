---
layout: page
title: Common packages
---

When Termux is first started a minimal bootstrap environment is installed - the `apt` package manager may be used to install further packages.

Text editing
------------
By default the busybox version of `vi` is available. This is a barebone and somewhat unfriendly editor - run `apt install nano` for a more straight-forward editor and `apt install vim` for a more powerful one.

Interactive shells
-----------------
The base system that is installed when first starting Termux uses the bash shell, which is the default shell on most Linux distributions, with resources such as [Bash Guide for Beginners](http://www.tldp.org/LDP/Bash-Beginners-Guide/html/), the [Bash Reference Manual](https://www.gnu.org/software/bash/manual/bash.html) and the [Advanced Bash-Scripting Guide](http://www.tldp.org/LDP/abs/html/) available.

By installing the `zsh` package the Zsh shell can be used - a powerful shell with information available at [A User's Guide to the Z-Shell](http://zsh.sourceforge.net/Guide/zshguide.html), the [Z Shell Manual](http://zsh.sourceforge.net/Doc/Release/zsh_toc.html) and [ZSH Tips](http://www.rayninfo.co.uk/tips/zshtips.html). After installing zsh through apt install zsh, execute chsh -s zsh to set it as the default login shell when starting Termux (and change back with chsh -s bash if necessary).
