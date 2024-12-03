---
title:  "Termux Selected For NLnet NGI Mobifree Grant"
page_ref: /posts/general/2024/11/11/termux-selected-for-nlnet-ngi-mobifree-grant.html
---

Termux has been approved to receive a grant from the [NLnet Foundation](https://nlnet.nl) under its NGI Mobifree ([1](https://nlnet.nl/mobifree), [2](https://mobifree.org)) program for the June 2024 call. NGI Mobifree is a pilot within the European Commission's [Next Generation Internet](https://ngi.eu) (NGI) initiative. The public announcement by NLnet is available at https://nlnet.nl/news/2024/20241111-NGI-Mobifree-grants.html with our project page at https://nlnet.nl/project/Termux.

[Henrik Grimler](https://github.com/Grimler91) and [agnostic-apollo](https://github.com/agnostic-apollo) are really grateful for this opportunity and really excited to work with the NLnet Foundation under the grant.

Under the NGI Mobifree grant the following three improvements to Termux are planned to be implemented.

1. [termux-core Library](#termux-core-library)
2. [APK Library File (APKLF)](#apk-library-file-apklf)
3. [Dynamic Variables](#dynamic-variables)

---

&nbsp;





## termux-core Library

The `termux-core` library will be created which will allow external projects to use Termux execution environment and packages in their own apps. Currently, to integrate Termux in third party apps requires a full fork of Termux app and manual integration.

The library is planned to be provided under the [`MIT`](https://opensource.org/licenses/MIT) license to increase adoption and prevent license conflicts as we want `termux-core` to be more attractive to external projects and commercial entities that could have uses for a termux-ish environment in their app. We hope the MIT license + proof-of-concept demonstrations can help us land some support contracts, and make the Termux project more economically sustainable.

---

&nbsp;





## APK Library File (APKLF)

A new APK Library File (APKLF) execution/packaging design will be implemented so that Termux can comply with security restrictions added in Android `10` prevents apps from executing downloaded packages if an app uses [`targetSdkVersion`](https://developer.android.com/guide/topics/manifest/uses-sdk-element#target) `>= 29` (Android `10`). As a workaround Termux is currently using `targetSdkVersion` `= 28` (Android `9`) to run in backward compatibility mode.

Check the [App Data File Execute Restrictions](https://github.com/agnostic-apollo/Android-Docs/blob/master/site/pages/en/projects/docs/apps/processes/app-data-file-execute-restrictions.md), including the [`untrusted_app* SeLinux Policy`](https://github.com/agnostic-apollo/Android-Docs/blob/master/site/pages/en/projects/docs/apps/processes/app-data-file-execute-restrictions.md#untrusted_app-selinux-policy) section for more info on the Android security restrictions. Check the [termux/termux-app#1072: No more exec from data folder on targetAPI >= Android Q](https://github.com/termux/termux-app/issues/1072) and [termux/termux-app#2155: Revisit the Android W^X problem](https://github.com/termux/termux-app/issues/2155) issues for discussions regarding the issues and possible solutions. To understand how Termux executes files, check the [Termux Execution Environment](https://github.com/termux/termux-packages/wiki/Termux-execution-environment) docs.

Check the [`APK Native Library`](https://github.com/agnostic-apollo/Android-Docs/blob/master/site/pages/en/projects/docs/apps/processes/app-data-file-execute-restrictions.md#apk-native-library) docs for more info on the `APKLF` design, and the `Issues` sections for details on all its issues that need to be solved. A proper design doc and info on additional issues will be published in near future.

`APKLF` design is very critical for long term functioning and stability of the Termux app, as the exemption allowed by Android for apps like Termux to execute downloaded files by using `targetSdkVersion` `= 28` (Android `9`) may end in some future Android version, which will break Termux completely. Android has already bumped `PLATFORM_MIN_SUPPORTED_TARGET_SDK_VERSION` to `28` in Android `14` and there are plans to bump it to `29` soon, which will then show a message when Termux app is launched to warn the users that app may not work properly as its targeting too old an sdk. ([1](https://cs.android.com/android/_/android/platform/build/+/67ebe09f86bf55b54731cfa99bbfbe90db7c850b), [2](https://cs.android.com/android/_/android/platform/build/release/+/abd2b8452b81f79722dffcd45a491473b2be91d6:flag_declarations/RELEASE_PLATFORM_MIN_SUPPORTED_TARGET_SDK_VERSION.textproto;l=1;bpv=1;bpt=0;drc=9f7ef8bd22b400ba7ca922eba1db83c6701d979c)) Additionally, this is required for [`temrux-core` library](#termux-core-library) as well as external apps, especially ones on Google PlayStore, cannot use older `targetSdkVersion` like Termux does to bypass restrictions.

### Context

Android restricts execution based on SeLinux policies and contexts assigned to app processes (`untrusted_app*`) and their files under app data directory (`app_data_file`). If a file exists in the private app data directory `/data/data/<package_name>` of the app, in which files can be created at runtime, Android does not allow execution if app uses `targetSdkVersion`  `>= 29` as that is considered a security risk to allow random code to be executed. Google wants only files that exist inside app APKs to be executable as APKs can be scanned for malicious files, either on device or when uploaded to app stores like Google PlayStore. This is a different security model than how general purpose computers work which allow downloading and executing code without any restrictions.

- The solution that is approved by Android, and which will be used by `APKLF`, is for app developers to add any executable files to the APK native library directory, which are then extracted to system controlled `/data/app/*<package_name>/lib/<arch>` path when app is installed. Files under this directory have a different SeLinux contexts `apk_data_file` for which execution is allowed. However, this is a single level directory and nested directories required by a rootfs are not allowed, so files inside it need to be symlinked into the rootfs inside the app data directory to provide a proper execution environment. Moreover, a single APK cannot contain 1000s of packages, and updating a single package would also require downloaded and installing the entire APK, so packages need to be in distributed in their own separate app APKs. Lot of complications exist in this design that would need to be solved.

- Another "hack" that's named `system_linker_exec` was also found that allows executing files from app data directory while still using `targetSdkVersion` for latest Android versions. This is done by hooking into `exec()` functions and passing the executable path to the `/system/bin/linker` for it execute it, this way SeLinux assumes that a safe path under `/system/bin` is being executed and allows it. However, this hack will likely get patched by Android as it is a security risk and cannot be relied on as a long term solution and is also not compliant with Google PlayStore policies. Check the [termux/termux-exec/pull/24 ](https://github.com/termux/termux-exec/pull/24#issuecomment-1873059748) pull request and [System Linker Exec](https://github.com/agnostic-apollo/Android-Docs/blob/master/site/pages/en/projects/docs/apps/processes/app-data-file-execute-restrictions.md#system-linker-exec) docs, and [`termux-exec` technical](https://github.com/termux/termux-exec/blob/bb75f48d646aa0478527196f1878df53cd1a257c/site/pages/en/projects/docs/technical/index.md) docs for how this works.

- Another solution that is yet to be asked from Google is to add a special SeLinux process domain for apps that have been granted a special permission with `adb` to execute files in some future Android version `X`, but there is no guarantee that is will be approved and Android version 10 to (X-1) would still not be able to use it. Check [termux/termux-app/issues/2155](https://github.com/termux/termux-app/issues/2155#issuecomment-1421268867) issue comment and [`untrusted_dev_app` process context type](https://github.com/agnostic-apollo/Android-Docs/blob/master/site/pages/en/projects/docs/apps/processes/app-data-file-execute-restrictions.md#untrusted_dev_app-process-context-type) docs for more info.

---

&nbsp;





## Dynamic Variables

Termux package sources will be patched to read paths from environment variables exported by the app, or compiled package files will be patched at install time, rather than relying on hardcoded paths in the package files to Termux rootfs.

Termux packages currently use hardcoded paths/variables that are added/replaced in package sources at build time for its Termux rootfs directory `/data/data/com.termux/files` under the app data directory that Android is expected to assign to the Termux app if its installed in the primary Android user `0`. This prevents Termux packages to run if Termux app is installed in secondary users/work profiles, or on external sdcards, or if packages are running in an external app with a different app data or rootfs directory, unless packages are compiled specifically for the different rootfs path.

There are currently around `~4000` placeholders in package source/patch files that are replaced at build time with Termux variables. There are also additional variables passed as build time config to package source builder scripts. To solve the issues of hardcoded values, following will be done.
- The sources of any executable files of the package will be patched at build time with package source language specific code to read environment variables at runtime that are exported by the Termux app.
- Non-executable files will be patched at install time on the device where the placeholder in package files will be replaced with its respective current environment variable value by the package manager (`dpkg`). Similar replacement will need to done for package files in the Termux app [bootstrap](https://github.com/termux/termux-packages/wiki/For-maintainers#bootstraps) during bootstrap installation. Compressed files will require special logic for replacement if possible. The path placeholders itself will likely with working default paths with extra path separators `/` added to fill up the max length of each path type as per [Termux file path limits](https://github.com/termux/termux-packages/wiki/Termux-file-system-layout#file-path-limits), and paths with the same length will be replaced otherwise a file may break. This should also ensure that existing Termux installations do not break, like in case if a package got updated before `dpkg` was updated to the version that implements the placeholder replacement if placeholder was not a working path.

Executable files will not use the placeholder-patch design at install time as for [APKLF](#apk-library-file-apklf) design, the executables will be read-only library files under the system owned APK native library directory ([ApplicationInfo.nativeLibraryDir](https://developer.android.com/reference/android/content/pm/ApplicationInfo#nativeLibraryDir)) `/data/app/*<package_name>/lib/<arch>`.

Packages that have been updated to dynamic variables design will be be marked as such in their package build `build.sh` files and `deb` control files. All the packages dependencies would need to be fixed as well before a package can be marked. Initially only the bootstrap and other important/popular packages will be patched.

Once packages are fixed to use environment variables, it should also allow external projects with a different app package name to execute packages already compiled for Termux app rootfs without having to recompile them from source, which often takes many hours and significant cpu/memory resources, so would ease adoption of Termux in external projects. However, packages may still have references to Termux name/urls inside them that are added at build time, and if an external project does not want that, then they will need to compile packages themselves anyways with their project specific values, but that will at least allow Termux packages to work if their app is installed on secondary users/work profiles, or on external sdcards.

Check the [Termux Filesystem Layout](https://github.com/termux/termux-packages/wiki/Termux-file-system-layout) docs for more info on the Termux filesystem and the [Termux rootfs](https://github.com/termux/termux-packages/wiki/Termux-file-system-layout#termux-rootfs-directory).

---

&nbsp;
