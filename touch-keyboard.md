---
layout: page
title: Using a touch keyboard
---

Using the Ctrl key is necessary for working with a terminal - but most touch keyboards does not include one. For that purpose Termux uses the Volume down button to emulate the Ctrl key. For example, pressing Volume down+L on a touch keyboard sends the same input as pressing Ctrl+L on a hardware keyboard.

The result of using Ctrl in combination with a key depends on which program is used, but for many command line tools the following shortcuts works:

- Ctrl+A → Move cursor to the beginning of line
- Ctrl+C → Abort (send SIGINT to) current process
- Ctrl+D → Logout of a terminal session
- Ctrl+E → Move cursor to the end of line
- Ctrl+K → Delete from cursor to the end of line
- Ctrl+L → Clear the terminal
- Ctrl+Z → Suspend (send SIGTSTP to) current process

The Volume up key also serves as a special key to produce certain input:

- Volume Up+L → &#124; (the pipe character)
- Volume Up+E → Escape key
- Volume Up+T → Tab key
- Volume Up+1 → F1 (and Volume Up+2 → F2, etc)
- Volume Up+B → Alt+B, back a word when using readline
- Volume Up+F → Alt+F, forward a word when using readline
- Volume Up+W → Up arrow key
- Volume Up+A → Left arrow key
- Volume Up+S → Down arrow key
- Volume Up+D → Right arrow key
- Volume Up+. → Ctrl+\ (SIGQUIT)
- Volume Up+U → _ (underscore)
- Volume Up+X → Delete
- Volume Up+P → Page Up
- Volume Up+N → Page Down

