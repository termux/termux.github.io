---
layout: page
title: Changelog
---

# Termux v0.33 (2016-04-16)
- Fix installation on devices with a 64-bit cpu but without a 64-bit runtime (such as the Galaxy S5 Neo).
- Match less files when offering to view a file in Termux- now only text files are opened for viewing.
- Do not force choice of browsers when opening an url from the context menu.

# Termux v0.32 (2016-03-25)
- Avoid matching too many intents for the file and url receiving feature introduced in v0.31.

# Termux v0.31 (2016-03-22)
- Termux can now receive files shared from other apps. Files are saved into `~/downloads/` and it's possible to open this folder or editing a file directly when receiving it. Editing is done through a `~/bin/termux-file-editor` program which will be called with the newly received file as only argument.
- Termux can now receive URL:s shared from other apps, which is done by calling a script `~/bin/termux-url-opener` with the shared URL as only argument.
- Start using 64-bit arm packages for capable devices. Up until now Termux used 32-bit arm binaries even on 64-bit devices. This change will affect only new installations - existing users may reinstall the app to get a 64-bit environment (making sure to save relevant material from the home folder first).
- Fix ASCII backspace to work across wrapped lines. This enables pil, the picolisp REPL, to work correctly with long lines.
- Keep the `EXTERNAL_STORAGE` environment variable. This is required on some Samsung devices for `/system/bin/am` to work, which is used by Termux api commands and `termux-reload-settings`.
- Remove `/system/bin` from the default `PATH` for normal sessions. This avoids confusion with system binaries being run by mistake instead of proper Termux ones. System tools such as am and pm still work and advanced users who need more system tools can add `/system/bin` back manually.
- Add `/system/bin` to the `PATH` when launching failsafe sessions so that system tools can be used to repair a broken Termux environment.
- Prevent crashes when trying to launch the styling plug-in under certain circumstances.

# Termux v0.30 (2016-02-25)
- Fix tabs to not overwrite cells. Problem identified by Thomas Rast.

# Termux v0.29 (2016-02-14)
- Ensure that terminal session changes that happened while the device was asleep is always visible directly when returning to the app.
- Small improvement to first launch message to better explain how to reach the Help section.

# Termux v0.28 (2016-02-09)
- Do not spawn the terminal process until an initial terminal size is known. Fixes issues with certain programs expecting a correct terminal size directly, such as frotz when launched through a widget shortcut.


# Termux v0.27 (2016-01-21)
- Fix edge cases in terminal emulation and UTF-8 error handling
- The Back key now works in normal system mode by default - hiding the keyboard if visible or leaving the app. See [https://termux.com/configuration.html](https://termux.com/configur
ation.html) for how to configure the Back key to send the Escape key, the previous default value.

# Termux v0.26 (2016-01-13)
- Make text selection quicker by selecting text directly on long press instead of going through menus.
- Add text grip bars to text selection like in normal system text components.
- Disable autoscrolling while selecting text.
- Disable the pull-out drawer at the left while selecting text.
- Fix problem with selecting snippets of text with wide unicode characters at start or end of selection.
- Remove the "tap-screen" configuration option for the more common show keyboard behaviour when tapping the terminal.
- Add new hardware keyboard shortcut Ctrl+Shift+K for toggling soft keyboard visibility.
- Long pressing on the New session button to create a named session no longer uses an intermediate dialog.
- Paste text on when pressing the middle mouse button on a hardware mouse.
- Fix occasional crash when returning to the app after process killed to serve memory.

# Termux v0.25 (2015-12-29)
- Handle keyboards sending ˆ (U+02C6: MODIFIER LETTER CIRCUMFLEX ACCENT) instead of the normal caret ^ (U+005E: CIRCUMFLEX ACCENT) by replacing the former with the latter when processing keyboard input.
