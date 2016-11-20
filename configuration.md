---
layout: page
title: Terminal configuration
---

The Termux terminal may be configured by creating the file `~/.termux/termux.properties`. This file uses a simple `key=value` property syntax and allow configuring the properties listed below.

After changing the properties file the changes will take effect either by executing `termux-reload-settings` or by restarting the Termux app (closing all sessions before starting it again).

Handling the bell character
---------------------------
By setting the `bell-character` property the behaviour when the [bell character](https://en.wikipedia.org/wiki/Bell_character) is received can be configured as follows:

    # Vibrate device (default).
    bell-character=vibrate

    # Beep with a sound.
    bell-character=beep

    # Ignore bell character.
    bell-character=ignore

Handling the back key
---------------------
By setting the `back-key` property the behaviour when the the back key is pressed can be configured as follows:

    # Send the Escape key.
    back-key=escape

    # Hide keyboard or leave app (default).
    back-key=back
