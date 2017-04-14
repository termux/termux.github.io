---
layout: page
title: Using FTP
---

Using the FTPD client
--------------------
You have to run run `ftpd` via `tcpsvd`

Example:

`tcpsvd -vE 0.0.0.0 1024 ftpd /`

This will start an FTP server on port 1024 from the `/` directory

Using a port number lower than 1024 on a non-rooted device will result in the following error message:

`tcpsvd: bind: Permission denied`
