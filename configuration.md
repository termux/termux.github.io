---
layout: page
title: Configuring
---

Termux may be configured by creating the file `$HOME/.config/termux/termux.properties`.

This file uses a simple `key=value` property syntax and allow configuring the following properties.

Handling the bell character
---------------------------
By setting the `bell-character` property the behaviour when the terminal is tapped can be configured as follows:

    bell-character=vibrate # Vibrate device (default).
    bell-character=beep    # Beep with a sound.
    bell-character=ignore  # Do nothing.

Handling tapping on the terminal
--------------------------------
By setting the `tap-screen` property the behaviour when the terminal is tapped can be configured as follows:

    tap-screen=toggle-keyboard # Toggle keyboard visibility (default).
    tap-screen=show-menu       # Show the context menu.
    tap-screen=ignore          # Do nothing..

Handling the back button
------------------------
By setting the `back-button` property the behaviour when the the back button is pressed can be configured as follows:

    back-button=escape # Send the escape key (default).
    back-button=back   # Hide the keyboard if visible, else leave the app.
