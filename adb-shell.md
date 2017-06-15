---
layout: page
title: Using Termux through the ADB shell
---

It is possible to access the Termux binaries from the comfort of your computer terminal as well, provided you have an [ADB shell](http://developer.android.com/tools/help/shell.html) configured and running.

You will need to run the following commands:

```
export LD_LIBRARY_PATH=/data/data/com.termux/files/usr/lib
export PATH=$PATH:/data/data/com.termux/files/usr/bin:/data/data/com.termux/files/usr/bin/applets
```

Example session:

```
$ sudo adb shell
[sudo] password for anarcat:
root@localhost:/ # export LD_LIBRARY_PATH=/data/data/com.termux/files/usr/lib
root@localhost:/ # cd /data/data/com.termux/files/
root@localhost:/data/data/com.termux/files # ./usr/bin/ip a | head -5
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 16436 qdisc noqueue state UNKNOWN
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
root@localhost:/data/data/com.termux/files # export PATH=$PATH:/data/data/com.termux/files/usr/bin:/data/data/com.termux/files/usr/bin/applets
root@localhost:/data/data/com.termux/files # cd /sdcard; ncdu
```
