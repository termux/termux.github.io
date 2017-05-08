---
layout: page
title: Changelog
---

# Termux:Styling v0.17 (2017-05-08)
- Fix base16 Monokai color theme.
- Add Nord color theme.
- Add Monofur font.
- Add Monoid font.

# Termux:Float v0.9 (2017-04-06)
- Preserve the `ANDROID_ROOT`, `ANDROID_DATA` and `EXTERNAL_STORAGE` environment variables in the launched shell.

# Termux:Float v0.8 (2017-04-05)
- Updated terminal emulation and keyboard handling.
- First open source release [on github](https://github.com/termux/termux-float).

# Termux v0.48 (2017-03-01)
- Fix crash in termux-open/xdg-open when opening an URL on Android versions before 7.

# Termux v0.47 (2017-02-28)
- Support `xdg-open`, a new built-in command to view files or URL:s in other apps (this replaces `termux-open-url` and `termux-share`, which will soon be removed). While new users will have it available by default, existing users need to run `apt update && apt upgrade`.
- Allow inline input without newlines in the text input view. Pressing return with text entered will send the text to the terminal. Pressing return again (with empty text) will send a newline.
- Remove the modal dialog for new users in favour of an inline help message at startup. Run `touch ~/.hushlogin` to get rid of this new message.

# Termux:Styling v0.16 (2017-01-06)
- Add monochrome `White on Black` and `Black on White` color schemes.

# Termux:API v0.12 (2017-01-06)
- For use with termux-api version 0.21 or later. Run `apt update && apt upgrade` to ensure that the latest packages are installed.
- Run any command with a `-h` flag to learn more.
- Support the new `termux-notification-remove` command to remove a notification.
- Add several options to `termux-notification`.
- Add new commands for wifi information: `termux-wifi-connectioninfo` and `termux-wifi-scaninfo`.

# Termux v0.46 (2016-12-30)
- Work better with the stock CyanogenMod and AOSP keyboards.
- Remove the shaking of the terminal on a bell character introduced in v0.44.
- Restore the ability to press Enter on the on-screen Android TV keyboard.

# Termux:Styling v0.15 (2016-12-29)
- Add Wild Cherry color scheme.
- Update app icon.

# Termux:Task v0.1 (2016-12-27)
- Initial release.

# Termux v0.45 (2016-12-27)
- Fix regression in v0.44 which caused Termux to crash when launching a shortcut using Termux:Widget.

# Termux v0.44 (2016-12-26)
- Add support for background tasks (use ~/.shortcuts/tasks/ with Termux:Widget or use the new Termux:Task add-on).
- Support cursor shapes (underscore and ibeam).
- Use the cursor colour from the color scheme (or set by escape sequences).
- Handle Samsung keyboards with the "Auto check spelling" better (but the setting should still be disabled for best interoperability with the terminal).
- Use a single wake lock instead of two.
- Support new commands: termux-wake-lock and termux-wake-unlock (run 'apt update && apt upgrade' to have it).
- Updated app icon.
- Add support for a new session app launcher shortcut on Android 7.1.
- Internal changes.

# Termux:Widget v0.6 (2016-11-20)
- Add support for folders inside `~/.shortcuts/` when creating single shortcuts.
- Tweak how nested folders are shown to save vertical space.
- Add support for launching background tasks without a terminal: A script in a folder named `tasks` will now be executed in the background without starting a terminal. NOTE: This requires updating the main Termux app to v0.43, which will be released shortly.

# Termux:Widget v0.5 (2016-10-26)
- Fix Android 7 incompatibility with single shortcuts.

# Termux:Widget v0.4 (2016-10-26)
- Support nestled folders under `~/.shortcuts/`.

# Termux v0.42 (2016-09-16)
- Change the keyboard shortcut sequence from Ctrl+Shift to Ctrl+Alt in order to work on more language layouts and devices (ChromeOS).
- Change VolumeUp+H to send a tilde (~).

# Termux:Styling v0.13 (2016-09-11)
- Update all fonts to their latest versions.
- All fonts are now patched to include powerline symbols.
- Add Fantasque font.

# Termux:API v0.11 (2016-09-06)
- Added optional region and variant params to termux-tts-speak.
- Fixed invalid JSON response by termux-telephony-deviceinfo.

# Termux v0.41 (2016-09-05)
- Fix handling of 0 and . on the numeric keypad.

# Termux v0.40 (2016-09-04)
- Support true (24-bit) color in the terminal.
- Recognise the Home key on external keyboards.
- Fix crash on VolumeUp+H.

# Termux v0.39 (2016-08-08)
- Fix the extra keys row to show up on Android 5 devices.
- Ensure that packages are installed matching the preferred system ABI.

# Termux v0.38 (2016-08-05)
- Fix issue (introduced in v0.36) with Samsung and some other keyboards entering word mode (no instant echo of characters).
- Allow pressing Enter in the predictive text area to remove a finished session.
- Implement Unicode 9 for character widths in the terminal emulation which avoids rendering emojis too narrow. Be sure to have updated packages (run apt update && apt upgrade) for this feature to work since the feature also requires support from terminal programs.

# Termux v0.37 (2016-08-01)
- Fix regression in v0.35 where Enter to close did not work with some keyboards.

# Termux:Styling v0.12 (2016-08-01)
- Add all base16 256 color schemes.
- Add Dracula color scheme.
- Don't crash on wonky permissions and respect symlinks.
- Fix incompatibility with Android N (popup dialogs were blank).

# Termux v0.35 (2016-08-01)
- Read properties from `$HOME/.termux/termux.properties` instead of `$HOME/.config/termux/termux.properties` (the old location will continue to work for now as a fallback).
- Compatibility with more input methods such as handwriting.
- Support native x86-64 packages instead of the previous fallback to i686 packages.
- New extra keys (`Escape`, `Ctrl`, `Alt` and some more) can now be shown above the normal keyboard. This is toggled with `VolumeUp+q` or by swiping in the drawer from the left and long pressing on the `KEYBOARD` button. There are some layout issues (such as for smaller screens) - this will be fixed in an update.
- By swiping the extra keys view to the left a text input is shown, allowing text input with normal text prediction to work. Useful when writing longer texts.
- Change how terminal sessions are detected as completed. Previously every opened file descriptor to the terminal had to be closed, now it is enough with the first session process (normally the shell) to exit. This is what most terminal emulators does and avoids hanging sessions.
- Change the `Hangup` context menu entry (shown when long pressing on the terminal and selecting `MORE...`), which sent `SIGHUP`, to `Kill process ($PID)`, which now sends `SIGKILL`. This ensures that the process is always killed. The menu entry can also be used to learn the PID of the current session.
- Change the minimum number of rows in the terminal from 8 to 4. This avoids having terminal output hidden by the keyboard on small displays or on large font sizes.
- Fix terminal to recognize backspace in combination with `Alt` and `Ctrl`.
- Fix terminal to recognize `Ctrl+/`.
- Make it possible to assign some limited keyboard shortcuts (note that `Ctrl` is a required part of the shortcuts for now) by specifying the following in `$HOME/.termux/termux.properties` (run `termux-reload-settings` to apply the shortcuts without restarting the app):
    - `shortcut.create-session = Ctrl + <something>`
    - `shortcut.previous-session = Ctrl + <something>`
    - `shortcut.next-session = Ctrl + <something>`
    - `shortcut.rename-session = Ctrl + <something>`

# Termux v0.34 (2016-04-22)
- Update to use the Storage Access Framework (SAF) on Android for sharing files to other apps. This streamlines the user experience when picking files from Termux for e.g. attaching to a mail and allows editing from other editor apps.
- Change VolumeUp+x to send Alt+x for easier use of e.g. emacs.

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
- The Back key now works in normal system mode by default - hiding the keyboard if visible or leaving the app. See [https://termux.com/configuration.html](https://termux.com/configuration.html) for how to configure the Back key to send the Escape key, the previous default value.

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
