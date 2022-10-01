---
title:  "Termux:Tasker v0.6.0 版本发布"
page_ref: /posts/apps/2022/02/25/termux-tasker-v0.6.0-release.html
---

`Termux:Tasker` `v0.6.0` 版本已经发布。

**强烈建议您更新到 `v0.5.0` 或更高版本以修复 [Termux 应用程序漏洞披露](https://termux.github.io/general/2022/02/15/termux-apps-vulnerability-disclosures.html) 。**
##



您可以在 [这里](https://github.com/termux/termux-tasker/releases) 查看版本。
##



# 变更日志

## [v0.6.0] - 2022-02-21 09.22

### 添加

- 为后台命令添加对`stdin`的支持。 用户现在可以通过 `stdin` 传递脚本， 比如 `$PREFIX/bin/bash`shell的`bash`脚本和`$PREFIX/bin/python`shell 的`python`脚本或任何其他命令。注意: 如果通过stdin传递脚本，请不要传递参数，因为shell的原因，它会出错（至少bash是如此）。因为Tasker捆绑限制最大脚本长度为45k，详情请查看[`EditConfigurationActivity.setStdinView()`](https://github.com/termux/termux-tasker/blob/v0.6.0/app/src/main/java/com/termux/tasker/EditConfigurationActivity.java#L262) 

- 添加对后台命令可以自定义日志级别的支持。值必须介于 `Logger`。LOG_LEVEL_OFF (0)` and `Logger.MAX_LOG_LEVEL` (currently `Logger.LOG_LEVEL_VERBOSE` (3)按照[`termux/termux-app@60f37bde`](https://github.com/termux/termux-app/commit/60f37bde). ([`5bf15189`](https://github.com/termux/termux-tasker/commit/5bf15189))  

- 添加对前台命令的会话操作支持。 有效值由 `TermuxConstants` 定义。TERMUX_APP.TERMUX_SERVICE.VALUE_EXTRA_SESSION_ACTION_*`, 目前，介于 `0` and `3` 在 https://github.com/termux/termux-app/blob/v0.117/termux-shared/src/main/java/com/termux/shared/termux/TermuxConstants.java#L856. ([`6f6ddd0d`](https://github.com/termux/termux-tasker/commit/6f6ddd0d))  


- 添加对等待前台会话命令结果的支持。先前配置的操作将表现相同，只等待后台命令。 对于创建或编辑的操作, `Wait for result for commands`切换值将用于决定是否等待命令的结果. 它适用于前台会话和后台命令. 请注意，对于前台命令, 仅返回会话记录，其中包含组合在 `%stdout` 变量中的`stdout` 和`stderr`, 基本上任何发送到`/dev/pts`伪终端的东西，包括交互式会话的`PS1`前缀。对于退出失败的前台命令，需要 `termux-app` 版本 `>=0.118` 才能让会话自动关闭，而无需等待用户按 回车[`termux/termux-app@c19e01fc`](https://github.com/termux/termux-app/commit/c19e01fc). 关闭 [#39](https://github.com/termux/termux-tasker/issues/39). ([`fecba503`](https://github.com/termux/termux-tasker/commit/fecba503))  

- 根据[`termux/termux-app@f62febbf`](https://github.com/termux/termux-app/commit/f62febbf) 和 [`termux/termux-app@a2209ddd`](https://github.com/termux/termux-app/commit/a2209ddd). ([`1c1567f2`](https://github.com/termux/termux-tasker/commit/1c1567f2))添加对`%stdout_original_length` 和 `%stderr_original_length`结果变量的支持。

- 添加可以选择禁用的启动器图标/活动. 这允许用户知道他们是否安装了 termux 插件，而无需转到 android 设置里的应用列表，并且应该有助于减少当用户转移 termux 安装源并获取签名与以前安装的版本不匹配时产生的问题。 某些手机也需要这样做，以允许用户从 DuraSpeed 等 OEM 后台杀手中选择退出该应用程序。相关问题 [`termux/termux-widget#56`](https://github.com/termux/termux-widget/issues/56). ([`8a78f282`](https://github.com/termux/termux-tasker/commit/8a78f282))  

- 根据 Android `12` 的要求为应用组件添加显式导出属性。 https://developer.android.com/about/versions/12/behavior-changes-12#exported. ([`50e20b22`](https://github.com/termux/termux-tasker/commit/50e20b22))  

- 根据 `night-mode` `termux.properties` 值添加对 `EditConfigurationActivity` 的日/夜间主题的支持.  `TextIOActivity` stdin 将始终使用浅色主题，因为它目前不支持深色模式。将来使用媒体查看器支持更新`termux-shared`时将添加支持. ([`b2cc90b6`](https://github.com/termux/termux-tasker/commit/b2cc90b6))  

- 将插件从github repo url 发送到 `TermuxService` 以在失败时显示。 ([`2eca337f`](https://github.com/termux/termux-tasker/commit/2eca337f))

- 创建版本时自动附加调试 APK。 ([`705361ec`](https://github.com/termux/termux-tasker/commit/705361ec))

- 添加`LICENSE.md`。([`cf1eda49`](https://github.com/termux/termux-tasker/commit/cf1eda49))

- 添加了崩溃处理程序，以便在启动时可以在 `termux-app` 中显示崩溃通知。 ([`63e76458`](https://github.com/termux/termux-tasker/commit/63e76458))  

### 修改

- 对于`stdin`，重新设计了插件配置视图和 `CardView` 支持。`termux-shared` 提供的 `TextIOActivity` 将暂时使用。 ([`05af1af1`](https://github.com/termux/termux-tasker/commit/05af1af1), [`b52db047`](https://github.com/termux/termux-tasker/commit/b52db047), [`9c287360`](https://github.com/termux/termux-tasker/commit/9c287360))  

- 启用后台模式并等待新插件配置的结果切换。 ([`70d97e7a`](https://github.com/termux/termux-tasker/commit/70d97e7a))

- 保存时保留插件配置值，即使它们不会被使用，因为标准输入脚本可能会被删除。 ([`26e1f5ea`](https://github.com/termux/termux-tasker/commit/26e1f5ea))

- 移动到应用程序版本的语义版本控制，并将提交的哈希值和 `github` 添加到 APK 文件名。([`4920bcd2`](https://github.com/termux/termux-tasker/commit/4920bcd2))  
- 在简介中将参数长度修改为`20`。 ([`a80fe8fb`](https://github.com/termux/termux-tasker/commit/a80fe8fb))

- 将简介长度从`60`增加到`120`，因为 Tasker 没这个限制。 如果它影响到了其他插件应用程序, 应该报告，以便可以使用条件简介大小. ([`a5bcd56a`](https://github.com/termux/termux-tasker/commit/a5bcd56a))  

- 禁用 `shrinkResources` 和混淆以测试可重现的构建和维护崩溃的堆栈跟踪。 ([`93555047`](https://github.com/termux/termux-tasker/commit/93555047))

- 打开插件配置时不自动打开键盘。 ([`267cf61c`](https://github.com/termux/termux-tasker/commit/267cf61c))

- 删除所有硬编码的 `com.termux` 常量，并使用 `termux-shared` 库中的 `TermuxConstants` 和 `TermuxPreferenceConstants` 的值。 ([`63e76458`](https://github.com/termux/termux-tasker/commit/63e76458))  

- 使用 `TermuxConstants` 中为 `PluginUtils` 定义的 `TermuxService` 返回的额外常量. ([`63e76458`](https://github.com/termux/termux-tasker/commit/63e76458))  
- 使用 `termux-shared` 提供的 `FileUtils` 和 `TermuxFileUtils` 来处理所有文件相关的功能，它有更好的， 更安全和更新的代码。 ([`63e76458`](https://github.com/termux/termux-tasker/commit/63e76458))  

- 使用 `termux-shared` 提供的 `TermuxTaskerAppSharedPreferences` 来处理 `SharedPreferences` 功能。 ([`63e76458`](https://github.com/termux/termux-tasker/commit/63e76458))  

- 使用 `termux-shared` 提供的 `Logger` 进行日志记录。 日志级别不会从每个日志条目的 `SharedPreferences` 中获取，但会在应用程序启动时从 `SharedPreferences` 加载到 `Logger.CURRENT_LOG_LEVEL` 变量中以及作为单独进程运行并维护单独的 `Logger 的`FireReceiver` 中 `实例。 `termux-app` 还可以从其设置中设置日志级别。 ([`63e76458`](https://github.com/termux/termux-tasker/commit/63e76458))  

- 修复未从文件中读取日志级别的问题，该问题已在上游的 `TermuxTaskerAppSharedPreferences` 中修复。 ([`63e76458`](https://github.com/termux/termux-tasker/commit/63e76458))  

- 以前的工作目录只有在 `TermuxConstants` 下才会自动创建。TERMUX_HOME_DIR_PATH` 但现在即使它在`TermuxConstants.TERMUX_FILES_DIR_PATH` 下也会被创建。[`63e76458`](https://github.com/termux/termux-tasker/commit/63e76458)

- 使用 `ExecutionCommand` 类来处理 `FireReceiver` 中的附加意图，因为它们与 `TermuxService` `ACTION_SERVICE_EXECUTE` 意图一致。([`63e76458`](https://github.com/termux/termux-tasker/commit/63e76458))  

- 使用 `termux-shared` 提供的 `TermuxUtils` 和 `PackageUtils` 并删除现有的 `TermuxUtils`。 `TermuxUtils.isTermuxAppAccessible()` 还将检查 `termux-tasker` 是否可以访问 `termux-app` 包 `Context`。 ([`63e76458`](https://github.com/termux/termux-tasker/commit/63e76458))  


### 修复

- 修复由于使用相同的请求代码而发送到 `TermuxService` 的用于执行命令的`PendingIntent`存在潜在冲突 ([`d9a172d7`](https://github.com/termux/termux-tasker/commit/d9a172d7))

- 修复切换到横向模式时出现 `android.view.WindowManager$BadTokenException: Unable to add window exception` ([`d0e88055`](https://github.com/termux/termux-tasker/commit/d0e88055))

- 修复为`null`插件bundle返回的错误字符串 ([`a0aaf8e8`](https://github.com/termux/termux-tasker/commit/a0aaf8e8))

- 如果没有将额外参数传递给`FireReceiver`，则修复`NullPointerException` ([`49acd107`](https://github.com/termux/termux-tasker/commit/49acd107))

- 处理无法获取版本代码以生成插件结果包不太可能的情况 ([`f6e33687`](https://github.com/termux/termux-tasker/commit/f6e33687))


### 文档

- 添加 Google Play商店的弃用通知 ([`17c69428`](https://github.com/termux/termux-tasker/commit/17c69428))

- 添加贡献和分叉信息 ([`78fbc00e`](https://github.com/termux/termux-tasker/commit/78fbc00e))

- 更新调试说明 ([`81828177`](https://github.com/termux/termux-tasker/commit/81828177))

- 更新插件配置说明 ([`f86a675a`](https://github.com/termux/termux-tasker/commit/f86a675a))

- 更新安装说明 ([`ea1225ae`](https://github.com/termux/termux-tasker/commit/ea1225ae))

- 删除指向 Google Play和 Nethunter 商店的链接。 因为两者都提供过时的构建 ([`552d592e`](https://github.com/termux/termux-tasker/commit/552d592e))  
##



## 下载

- [F-Droid Termux:Tasker APK 直接链接](https://f-droid.org/repo/com.termux.tasker_6.apk)
- [F-Droid Termux:Tasker 网站](https://f-droid.org/en/packages/com.termux.tasker)
- [F-Droid App](https://f-droid.org/en/packages/org.fdroid.fdroid) (在`Updates`选项卡中从顶部下拉以显示更新)
##



如果您遇到任何问题，请随时在 [Github](https://github.com/termux/termux-tasker/issues), [Matrix](https://matrix.to/#/#termux_termux:gitter.im) 或[Reddit](https://www.reddit.com/r/termux)上报告， Thanks :)


[v0.6.0]: https://github.com/termux/termux-tasker/compare/v0.5...v0.6.0
