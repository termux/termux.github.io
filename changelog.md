---
layout: page
title: Changelog
---

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
