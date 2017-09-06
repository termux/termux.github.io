---
layout: page
title: Common packages
---

When Termux is first started a minimal bootstrap environment is installed - the `apt` package manager may be used to install further packages.

Text editing
------------
By default the busybox version of `vi` is available. This is a barebone and somewhat unfriendly editor - run `apt install nano` for a more straight-forward editor and `apt install vim` for a more powerful one.
Another IDE is emacs which is highly extensible with its large package repository, you can install emacs by `apt install emacs`

`nano` and `micro` are also some popular text editors. 

Interactive shells
-----------------
The base system that is installed when first starting Termux uses the bash shell, which is the default shell on most Linux distributions, with resources such as [Bash Guide for Beginners](http://www.tldp.org/LDP/Bash-Beginners-Guide/html/), the [Bash Reference Manual](https://www.gnu.org/software/bash/manual/bash.html) and the [Advanced Bash-Scripting Guide](http://www.tldp.org/LDP/abs/html/) available.

By `apt install zsh` package the Zsh shell can be used - a powerful shell with information available at [A User's Guide to the Z-Shell](http://zsh.sourceforge.net/Guide/zshguide.html), the [Z Shell Manual](http://zsh.sourceforge.net/Doc/Release/zsh_toc.html) and [ZSH Tips](http://www.rayninfo.co.uk/tips/zshtips.html). After installing zsh through apt install zsh, execute chsh -s zsh to set it as the default login shell when starting Termux (and change back with chsh -s bash if necessary).

fish is another popular shell known for its extensibility. You can install fish shell by `apt install fish`


When you want to use another shell inside current session, you can do `bash`, `zsh` or `fish`, but if you wish to use another shell for all of your future sessions, you can do that by `chsh -s <shell_name>`

Various common packages
-----------------------
The initial Termux installation contains lightweight versions of many classic Unix tools such as `cp`, `mv`, `ls`, `tar` and `wget` - run `busybox --help` for a full list.

There are several more packages which provide more compatible and complete variants of these tools:

- `apt install coreutils` for the full-fledlged variants of base utilities such as `mv`, `ls`, `test`, `uniq` and more.

- `apt install wget` installs GNU wget. Alternatives to wget are `aria2c`, `curl` and `lftp`.

- `apt install tar` installs GNU tar.

- `apt install less` installs the complete `less` command.
