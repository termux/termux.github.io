---
layout: post
title:  "Termux:Tasker v0.6.0 Release"
category: apps
---

The `Termux:Tasker` `v0.6.0` is out.

**It is highly recommended that you update to `v0.5.0` or higher for fixes for vulnerabilities disclosed in the [Termux Apps Vulnerability Disclosures](https://termux.github.io/general/2022/02/15/termux-apps-vulnerability-disclosures.html) post.**

---
&nbsp;&nbsp;



You can check the release at github [here](https://github.com/termux/termux-tasker/releases/tag/v0.6.0).

---
&nbsp;&nbsp;



# Changelog

## [v0.6.0] - 2022-02-21 09.22

### Added

- Add support for `stdin` for background commands. Users can now pass scripts via `stdin`, like a `bash` script to the `$PREFIX/bin/bash` shell and a `python` script to the `$PREFIX/bin/python` shell or any other commands. Note that if passing script via `stdin`, do not pass arguments, since it will fail depending on shell, at least will for `bash`. Max length of script supported is `45K` characters as per Tasker plugin bundle limits, check [`EditConfigurationActivity.setStdinView()`](https://github.com/termux/termux-tasker/blob/v0.6.0/app/src/main/java/com/termux/tasker/EditConfigurationActivity.java#L262) for details. Closes [#46](https://github.com/termux/termux-tasker/issues/46). ([`05af1af1`](https://github.com/termux/termux-tasker/commit/05af1af1))  

- Add support for custom log level for background commands. Values must be between `Logger.LOG_LEVEL_OFF (0)` and `Logger.MAX_LOG_LEVEL` (currently `Logger.LOG_LEVEL_VERBOSE (3)` as per [`termux/termux-app@60f37bde`](https://github.com/termux/termux-app/commit/60f37bde). ([`5bf15189`](https://github.com/termux/termux-tasker/commit/5bf15189))  

- Add support for session action for foreground commands. Valid values are defined by `TermuxConstants.TERMUX_APP.TERMUX_SERVICE.VALUE_EXTRA_SESSION_ACTION_*`, currently, between `0` and `3` at https://github.com/termux/termux-app/blob/v0.117/termux-shared/src/main/java/com/termux/shared/termux/TermuxConstants.java#L856. ([`6f6ddd0d`](https://github.com/termux/termux-tasker/commit/6f6ddd0d))  


- Add support for waiting for foreground session command results. Previously configured actions will behave the same, i.e wait for only background commands. For new or edited actions, the `Wait for result for commands` toggle value will be used to decide whether to wait for result of commands. It will apply to both foreground session and background commands. Note that for foreground commands, only the session transcript is returned which will contain both `stdout` and `stderr` combined in `%stdout` variable, basically anything sent to the the pseudo terminal `/dev/pts`, including `PS1` prefixes for interactive sessions. For foreground commands that exited with failure will require `termux-app` version `>=0.118` for sessions to automatically close without waiting for user to press enter as per [`termux/termux-app@c19e01fc`](https://github.com/termux/termux-app/commit/c19e01fc). Closes [#39](https://github.com/termux/termux-tasker/issues/39). ([`fecba503`](https://github.com/termux/termux-tasker/commit/fecba503))  

- Add support for `%stdout_original_length` and `%stderr_original_length` result variables as per [`termux/termux-app@f62febbf`](https://github.com/termux/termux-app/commit/f62febbf) and [`termux/termux-app@a2209ddd`](https://github.com/termux/termux-app/commit/a2209ddd). ([`1c1567f2`](https://github.com/termux/termux-tasker/commit/1c1567f2))

- Add launcher icon/activity that can optionally be disabled. This allows users to know if they have installed the termux plugin without having to go to android settings app list and should help reduce issues created when users shift termux installation source and get signatures do not match previously installed version errors. This is also required on some phones to allow the user to opt out the app from OEM background killers like DuraSpeed. Related issue [`termux/termux-widget#56`](https://github.com/termux/termux-widget/issues/56). ([`8a78f282`](https://github.com/termux/termux-tasker/commit/8a78f282))  

- Add explicit exported attribute for app components as required by Android `12`. https://developer.android.com/about/versions/12/behavior-changes-12#exported. ([`50e20b22`](https://github.com/termux/termux-tasker/commit/50e20b22))  

- Add Day/Night theme support for `EditConfigurationActivity` based on `night-mode` `termux.properties` value. The stdin `TextIOActivity` will always use light theme since it doesn't currently support dark mode. Support will be added in future when `termux-shared` is updated with media viewer support. ([`b2cc90b6`](https://github.com/termux/termux-tasker/commit/b2cc90b6))  

- Send plugin github repo url to `TermuxService` to be shown in case of failure. ([`2eca337f`](https://github.com/termux/termux-tasker/commit/2eca337f))

- Automatically attach debug APKs when a release is created. ([`705361ec`](https://github.com/termux/termux-tasker/commit/705361ec))

- Add LICENSE.md. ([`cf1eda49`](https://github.com/termux/termux-tasker/commit/cf1eda49))

- Added crash handler so that crash notifications can be shown in `termux-app` at startup. ([`63e76458`](https://github.com/termux/termux-tasker/commit/63e76458))  

### Changed

- Redesign plugin configuring views with `CardView` support. For `stdin`, the `TextIOActivity` provided by `termux-shared` will be used temporarily. ([`05af1af1`](https://github.com/termux/termux-tasker/commit/05af1af1), [`b52db047`](https://github.com/termux/termux-tasker/commit/b52db047), [`9c287360`](https://github.com/termux/termux-tasker/commit/9c287360))  

- Enable background mode and wait for results toggle for new plugin configs. ([`70d97e7a`](https://github.com/termux/termux-tasker/commit/70d97e7a))

- Keep plugin config values when saving even if they wont be used since stdin scripts may be deleted accidentally. ([`26e1f5ea`](https://github.com/termux/termux-tasker/commit/26e1f5ea))

- Move to semantic versioning for app version and add commit hash and `github` to APK file names.([`4920bcd2`](https://github.com/termux/termux-tasker/commit/4920bcd2))  
- Trim arguments length to `20` in blurb. ([`a80fe8fb`](https://github.com/termux/termux-tasker/commit/a80fe8fb))

- Increase blurb length from `60` to `120` since Tasker doesn't have that limit. If it affects other plugin host apps, it should be reported so that conditional blurb size can be used. ([`a5bcd56a`](https://github.com/termux/termux-tasker/commit/a5bcd56a))  

- Disable `shrinkResources` and obfuscation for testing reproducible builds and maintaining stacktraces of crashes. ([`93555047`](https://github.com/termux/termux-tasker/commit/93555047))

- Do not automatically open keyboard when opening plugin configuring. ([`267cf61c`](https://github.com/termux/termux-tasker/commit/267cf61c))

- Remove all hardcoded `com.termux` constants and use the values defined by `TermuxConstants` and `TermuxPreferenceConstants` in `termux-shared` library. ([`63e76458`](https://github.com/termux/termux-tasker/commit/63e76458))  

- Use extra constants returned by `TermuxService` defined in `TermuxConstants` for `PluginUtils`. ([`63e76458`](https://github.com/termux/termux-tasker/commit/63e76458))  
- Use `FileUtils` and `TermuxFileUtils` provided by `termux-shared` to handle all file related functionality which has better, safer and more updated code. ([`63e76458`](https://github.com/termux/termux-tasker/commit/63e76458))  

- Use `TermuxTaskerAppSharedPreferences` provided by `termux-shared` for handling `SharedPreferences` functionality. ([`63e76458`](https://github.com/termux/termux-tasker/commit/63e76458))  

- Use `Logger` provided by `termux-shared` for logging. Log level will not be got from `SharedPreferences` for each log entry but will be loaded from `SharedPreferences` into the `Logger.CURRENT_LOG_LEVEL` variable at application startup and also in `FireReceiver` which runs as a separate process and maintains separate `Logger` instance. The `termux-app` can also set the log level from its settings. ([`63e76458`](https://github.com/termux/termux-tasker/commit/63e76458))  

- Fix issue where log level was not being read from file, which has been fixed in `TermuxTaskerAppSharedPreferences` in upstream. ([`63e76458`](https://github.com/termux/termux-tasker/commit/63e76458))  

- Previously working directory would only be created automatically if it was under `TermuxConstants.TERMUX_HOME_DIR_PATH` but now it will be created even if its under `TermuxConstants.TERMUX_FILES_DIR_PATH`. ([`63e76458`](https://github.com/termux/termux-tasker/commit/63e76458))  

- Use `ExecutionCommand` class to handle intent extras in `FireReceiver` since they are consistent with that of `TermuxService` `ACTION_SERVICE_EXECUTE` intent. ([`63e76458`](https://github.com/termux/termux-tasker/commit/63e76458))  

- Use `TermuxUtils` and `PackageUtils` provided by `termux-shared` and remove existing `TermuxUtils`. The `TermuxUtils.isTermuxAppAccessible()` will also check if `termux-tasker` can access `termux-app` package `Context`. ([`63e76458`](https://github.com/termux/termux-tasker/commit/63e76458))  


### Fixed

- Fix potential conflicting `PendingIntent` for execution commands sent to `TermuxService` due to same request code being used. ([`d9a172d7`](https://github.com/termux/termux-tasker/commit/d9a172d7))

- Fix `android.view.WindowManager$BadTokenException: Unable to add window exception` when switching to landscape mode. ([`d0e88055`](https://github.com/termux/termux-tasker/commit/d0e88055))

- Fix wrong error string returned for `null` plugin bundle. ([`a0aaf8e8`](https://github.com/termux/termux-tasker/commit/a0aaf8e8))

- Fix `NullPointerException` if arguments extra is not passed to `FireReceiver`. ([`49acd107`](https://github.com/termux/termux-tasker/commit/49acd107))

- Handle unlikely case where failed to get version code to generate plugin result bundle. ([`f6e33687`](https://github.com/termux/termux-tasker/commit/f6e33687))


### Docs

- Add google play store deprecation notice. ([`17c69428`](https://github.com/termux/termux-tasker/commit/17c69428))

- Add contributing and forking info. ([`78fbc00e`](https://github.com/termux/termux-tasker/commit/78fbc00e))

- Update debugging instructions. ([`81828177`](https://github.com/termux/termux-tasker/commit/81828177))

- Update plugin configuration instructions. ([`f86a675a`](https://github.com/termux/termux-tasker/commit/f86a675a))

- Update install instructions. ([`ea1225ae`](https://github.com/termux/termux-tasker/commit/ea1225ae))

- Remove links to Google Play and Nethunter stores. Both offer outdated builds. ([`552d592e`](https://github.com/termux/termux-tasker/commit/552d592e))  

---
&nbsp;&nbsp;



## Downloads

- [F-Droid Termux:Tasker APK Direct Link](https://f-droid.org/repo/com.termux.tasker_6.apk)
- [F-Droid Termux:Tasker Site](https://f-droid.org/en/packages/com.termux.tasker)
- [F-Droid App](https://f-droid.org/en/packages/org.fdroid.fdroid) (Pull down from the top in the `Updates` tab for the update to show)

---
&nbsp;&nbsp;



If you face any issues, feel free to report them at [Github](https://github.com/termux/termux-tasker/issues), [Matrix](https://matrix.to/#/#termux_termux:gitter.im) or [Reddit](https://www.reddit.com/r/termux). Thanks :)


[v0.6.0]: https://github.com/termux/termux-tasker/compare/v0.5...v0.6.0
