---
layout: page
title: Security
redirect_from: /security
page_ref: /security.html
---

The Termux team takes all security vulnerabilities seriously and we encourage external parties and users to report them. We are also a strong believer of security-through-transparency and we publicly disclose all vulnerabilities that our own team finds or are reported by others as per responsible disclosure timelines.

&nbsp;



## Timeline and Disclosure Policy

1. Once the report sent to us by an external party has been received, it will be triaged by our team to see if it is valid and what its impact is. It will normally be acknowledged within `3` business days if valid and will then be assigned to a maintainer who will handle the communication with the reporter and coordinate the deployment of fixes and the vulnerability disclosure.
2. We will normally deploy fixes for the security vulnerability within `90` days. However, if the vulnerability is being actively exploited, then we aim to deploy fixes within `7` days.
3. After the fixes have been deployed and available to users, the vulnerability report will be disclosed publicly after `30` days on [GitHub security advisories](https://github.com/advisories) and/or on our <a href="/{{- page.lang -}}/posts/index.html">Termux site posts</a>.

&nbsp;



## Acknowledgement and Rewards

The first entity who reports the vulnerability to us, whether they are in our own Termux team or are an external party, only they will be acknowledged and/or rewarded, depending on if they want to be acknowledged and under what name and link they want to be acknowledged with.

If the vulnerability exists only in older versions, or if the vulnerability had already been fixed in the public/private `git` repository before the report was submitted, or if the vulnerability has already been reported or discovered by the maintainers but not yet fixed, then acknowledgements may not be given.

As for rewards, we currently do not have a rewards program, as all Termux services are primarily provided for free (beer) to our users and our <a href="/{{- page.lang -}}/donate">Donations</a> are rather limited and do not even cover the development costs itself of our entire team. However, for severe vulnerabilities, we may make an exception and pay out a token reward from our [Open Collective](https://opencollective.com/termux), depending on our budget.

The security impact (and any potential reward) is judged based on the actual reported impact of the vulnerability, and not on a potential impact of the vulnerability. Vulnerabilities without a valid attack scenario are not accepted.

&nbsp;



## What To Include in the Report

When reporting, the following things must be considered.

A good quality report has all the relevant details for the security vulnerability and has the following characteristics:

- It must include the repository and the exact component(s) that are affected with a detailed description of the vulnerability.
- It must include the affected version(s) of affected component(s) and any other relevant version numbers, like for OS and hardware device, etc. **"Latest version" is not a version name**, include exact version name of the component that is affected.
- A proof-of-concept (POC) with a step-by-step explanation that effectively, easily and reliably reproduces the vulnerability, including any test code and its output in the form of text, screenshots or videos. Text is preferred unless vulnerability is visual and the screenshot/video shows the complete output and is not blurred.
- An analysis and demonstration of the impact of the vulnerability.

Additionally:
- If you have coding experience and want to help fix the vulnerability, then a proposed patch can be sent as well and it will be merged if its the ideal solution.
- We also expect the reporter to be responsive when they are asked questions, and also accurately answer any queries about the vulnerability.
- If you are using a fork of Termux, then you should ideally first verify that the issue is reproducible in the Termux releases we provide before reporting to us. This can also help verify whether the issue exists because of changes in the fork or its config.
- See also [How to ask, report and request](https://github.com/termux/termux-community/blob/site/site/pages/en/rules/how-to-ask-report-and-request.md) for more info on what to normally include when reporting bugs to maintainers.
- The [Termux community rules](https://github.com/termux/termux-community/blob/site/site/pages/en/rules/index.md) must also be followed when reporting and collaborating on security vulnerabilities. Being deliberately offensive or disrespectful to Termux team members will result in a ban.

&nbsp;



## Where To Report

Security vulnerabilities can be reported in two ways:

1. **[GitHub Security Advisories](https://github.com/advisories)** is the the **preferred way** to report security vulnerabilities as it is the standard way for open source projects and allows multiple people to securely and privately collaborate on a fix, and our dependents and forks can be notified of the security vulnerabilities as well once it is published.

    You can use the `Security` tab of the affected repository to report the vulnerability. Check [GitHub docs](https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/privately-reporting-a-security-vulnerability) for more info on how to report.

    Note that normal bugs are not security vulnerabilities, and must not be reported to GitHub Security Advisory and instead should be reported as an `Issue` to its respective repository. Sending repeated non-security bugs to GitHub Security Advisory or sending spam to it will result in a ban.

2. **Emails** can also be sent to one or more maintainers that (seem to) maintain the affected component, as listed after the repository links in sections below, or as per `git` history or `CODEOWNERS` file. Emails should preferably be [`gpg` encrypted](https://www.gnupg.org/gph/en/manual/x110.html) to maintain confidentiality from people who may have access to the intermediate mail servers. You can find the public `gpg` keys of our common maintainers in the [`termux-keyring` package](https://github.com/termux/termux-packages/tree/master/packages/termux-keyring) or at the `https://github.com/<username>.gpg` URL. If the `gpg` key is not available for any maintainer who is responsible for the affected component, you may send an unencrypted report, or preferably email an encrypted report to [@agnostic-apollo](https://github.com/agnostic-apollo) ([agnostic-apollo@termux.dev](mailto:agnostic-apollo@termux.dev)) or [@Grimler91](https://github.com/Grimler91) ([grimler@termux.dev](mailto:grimler@termux.dev)), whose keys are available.

&nbsp;

The following lists the most popular and critical Termux repositories and their maintainers. You may email the respective maintainers if you want to report a vulnerability and cannot use GitHub security advisories, or if private questions/support/discussion is required. For the repositories below that are maintained by the "Termux team", either email to the maintainer that maintains the affected component as per `git` history or `CODEOWNERS` file, or email to [@agnostic-apollo](https://github.com/agnostic-apollo) or [@Grimler91](https://github.com/Grimler91).

### Termux Apps

- [`Termux` app](https://github.com/termux/termux-app/security). ([@agnostic-apollo](https://github.com/agnostic-apollo))
- [`Termux:API` app](https://github.com/termux/termux-api/security) and [`termux-api` package](https://github.com/termux/termux-api-package/security). ([@agnostic-apollo](https://github.com/agnostic-apollo))
- [`Termux:Boot` app](https://github.com/termux/termux-boot/security). ([@agnostic-apollo](https://github.com/agnostic-apollo))
- [`Termux:Float` app](https://github.com/termux/termux-float/security). ([@agnostic-apollo](https://github.com/agnostic-apollo))
- [`Termux:GUI` app](https://github.com/termux/termux-gui/security) and its packages. ([@tareksander](https://github.com/tareksander))
- [`Termux:Keychain` app](https://github.com/termux/termux-keychain-app/security) and [`termux-keychain` package](https://github.com/termux/termux-keychain-package/security). ([@agnostic-apollo](https://github.com/agnostic-apollo))
- [`Termux:Styling` app](https://github.com/termux/termux-styling/security). ([@agnostic-apollo](https://github.com/agnostic-apollo))
- [`Termux:Tasker` app](https://github.com/termux/termux-tasker/security). ([@agnostic-apollo](https://github.com/agnostic-apollo))
- [`Termux:Widget` app](https://github.com/termux/termux-widget/security). ([@agnostic-apollo](https://github.com/agnostic-apollo))
- [`Termux:X11` app](https://github.com/termux/termux-x11/security) and `termux-x11-nightly` package. ([@twaik](https://github.com/twaik))

### Termux Packages Build and Repository Infrastructure

- [`termux-packages`](https://github.com/termux/termux-packages/security). (Termux team, see also [`CODEOWNERS`](https://github.com/termux/termux-packages/blob/master/CODEOWNERS))
- [`repology-metadata`](https://github.com/termux/repology-metadata/security). ([@Grimler91](https://github.com/Grimler91), [@thunder-coding](https://github.com/thunder-coding))

If you have found a security issue in a specific external package not developed by Termux itself, for example `openssh`, and the issue can be reproduced in non-termux installations as well, then the issue should be reported to the upstream maintainers as well.

### Termux Internal Packages

- [`termux-core` package](https://github.com/termux/termux-core-package/security). ([@agnostic-apollo](https://github.com/agnostic-apollo))
- [`termux-elf-cleaner` package](https://github.com/termux/termux-elf-cleaner/security). ([@Grimler91](https://github.com/Grimler91), [@thunder-coding](https://github.com/thunder-coding))
- [`termux-exec` package](https://github.com/termux/termux-exec-package/security). ([@agnostic-apollo](https://github.com/agnostic-apollo))
- [`proot` package](https://github.com/termux/proot/security). ([@michalbednarski](https://github.com/michalbednarski))
- [`proot-distro` package](https://github.com/termux/proot-distro/security). ([@sylirre](https://github.com/sylirre))
- [`termux-tools` package](https://github.com/termux/termux-tools/security). (Termux team)

### Termux Site

- [`termux.github.io`](https://github.com/termux/termux.github.io/security). ([@agnostic-apollo](https://github.com/agnostic-apollo))

## &nbsp;

&nbsp;
