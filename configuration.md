---
layout: page
title: Terminal configuration
---

The Termux terminal may be configured by creating the file `~/.config/termux/termux.properties`. This file uses a simple `key=value` property syntax and allow configuring the properties listed below.

After changing the properties file the changes will take effect either by executing `termux-reload-settings` (run `apt update && apt upgrade` to ensure that this tool is installed) or by restarting the Termux app (closing all sessions before starting it again).

Handling the bell character
---------------------------
By setting the `bell-character` property the behaviour when the [bell character](https://en.wikipedia.org/wiki/Bell_character) is received can be configured as follows:

    # Vibrate device (default).
    bell-character=vibrate

    # Beep with a sound.
    bell-character=beep

    # Ignore bell character.
    bell-character=ignore

Handling tapping on the terminal
--------------------------------
By setting the `tap-screen` property the behaviour when the terminal is tapped can be configured as follows:

    # Toggle keyboard visibility.
    tap-screen=toggle-keyboard

    # Show the context menu.
    tap-screen=show-menu

    # Ignore taps.
    tap-screen=ignore

Handling the back button
------------------------
By setting the `back-button` property the behaviour when the the back button is pressed can be configured as follows:

    # Send the Escape key (default).
    back-button=escape

    # Hide keyboard or leave app.
    back-button=back
