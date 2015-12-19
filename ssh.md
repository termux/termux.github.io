---
layout: post
title: Using SSH
---

By installing the `openssh` test package (by executing `apt install openssh`) you may SSH into remote systems, optionally putting private keys or configuration under $HOME/.ssh/.

If you wish to use an SSH agent to avoid entering passwords, the Termux openssh package provides a wrapper script named ssha (note the 'a' at the end) for ssh which:

1. Starts the ssh agent if necessary (or connect to it if already running).
2. Runs ssh-add if necessary.
3. Runs ssh with the provided arguments.

This means that the agent will prompt for a key password at first run, but remember the authorization for subsequent runs.
