---
layout: page
title: Using SSH
---

Using the SSH client
--------------------
By installing the `openssh` package (by executing `apt install openssh`) you may SSH into remote systems, optionally putting private keys or configuration under $HOME/.ssh/.

If you wish to use an SSH agent to avoid entering passwords, the Termux openssh package provides a wrapper script named `ssha` (note the 'a' at the end) for ssh which:

1. Starts the ssh agent if necessary (or connect to it if already running).
2. Runs ssh-add if necessary.
3. Runs ssh with the provided arguments.

This means that the agent will prompt for a key password at first run, but remember the authorization for subsequent runs.

Using the SSH server
--------------------
The `sshd` server is included in the `openssh` package and allows you to connect to your Android device over ssh.

Start the server by executing `sshd` (which will start it on the default port 8022) and run `logcat -s 'syslog:*'` to view the log output from the server process. Execute `pkill sshd` to stop the server.

The Termux `sshd` binary does not support password logins, so a key needs to be authorized in `~/.ssh/authorized_keys` before connecting. Use `ssh-keygen` to generate a new one if desired.
