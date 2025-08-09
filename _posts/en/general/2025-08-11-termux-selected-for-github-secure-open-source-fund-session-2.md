---
title:  "Termux Selected For GitHub Secure Open Source Fund Session 2"
page_ref: /posts/general/2025/08/11/termux-selected-for-github-secure-open-source-fund-session-2.html
---

During June 2025 Termux team members [Agnostic Apollo](https://github.com/agnostic-apollo) and [Henrik Grimler](https://github.com/Grimler91) participated in a program by the [GitHub Secure Open Source Fund](https://resources.github.com/github-secure-open-source-fund) Session 2, together with maintainers from `~50` other open source projects. The program has been one of GitHub ways to work towards increasing security and security awareness in open source projects. You can read GitHub's announcement about the program at https://github.blog/open-source/maintainers/securing-the-supply-chain-at-scale-starting-with-71-important-open-source-projects.

In this post we will describe what we learnt, did and plan to do.

---

&nbsp;





## What We Learnt

The program was only `3` few weeks long, but touched on many important concepts, including but not limited to:

- Licenses and license compliance.
- Security advisories.
- Security incident responses.
- Threat modelling.
- Securing GitHub Actions.
- Securing code with CodeQL and code scanning.
- Secure UX design.
- AI and MCP security.
- Securing code with the help of GitHub Copilot.
- Securing and testing code with Fuzzing.

---

&nbsp;





## What We Did

Even though Termux has already done [a security disclosure once before](/{{- page.lang -}}/posts/security/2022/02/15/termux-apps-vulnerability-disclosures.html), the program helped us learn how to go through this process a bit more formally. As part of the program:

- Learnt how to assign a Common Vulnerability Scoring System (CVSS) score and request a Common Vulnerabilities and Exposures (CVE) ID from GitHub itself.

- Published our [Security Policy](/{{- page.lang -}}/security.html) and [Security Incident Response Checklist](/{{- page.lang -}}/security-incident-response-checklist.html) to formalize the process of reporting vulnerabilities to Termux and how we should handle them. These are linked in the `SECURITY.md` files of our repositories, like [`termux-app`](https://github.com/termux/termux-app/blob/master/SECURITY.md) and [`termux-packages`](https://github.com/termux/termux-packages/blob/master/SECURITY.md).

- Added a dedicated `security` category for posts on our site instead of mixing them under `general` posts. ([1](https://github.com/termux/termux.github.io/commit/c23bfd8c427e8973bfd03aa09990f85272bbd956))

- Added [CodeQL GitHub Action](https://github.com/github/codeql-action) workflow to scan GitHub Actions scripts of `termux-packages` repository, it will be added for other repositories in future. [OpenSSF Scorecard](https://securityscorecards.dev) that we learned about may be used as well. ([1](https://github.com/termux/termux-packages/commit/067ed1b4e211d7c2678b0133f8eed7f45de00b0b))

- Add [Dependency Submission GitHub Action](https://github.com/actions/gradle-build-tools-actions#the-dependency-submission-action) workflow for automatic dependency submission for Termux app for `gradle` builds so that Software Bill of Materials (SBOM) can be generated, which also enabled dependency vulnerability reporting in the repository Security tab. ([1](https://github.com/termux/termux-app/commit/4a9ad910ddc9ccaa872d37689705d21d98486821))

---

&nbsp;





## What We Plan To Do

The program and our work on security enhancements is not over just yet, it will continue on until the abyss consumes us. We plan to look into the following in future:

- Add a threat model for Termux app and plugins and our repo servers. This couldn't be done during the `3` week program as formally evaluating and writing docs for all would take days and weeks of work as our project scale is too wide, so will be done later. Currently, we normally discuss threats in pulls and issues when things are getting implemented.

- The power and greatness of [CodeQL](https://codeql.github.com/) cannot be denied and is something we can leverage to secure our open source projects. It can be used to scan security issues in code based on [published Common Weakness Enumerations (CWE)](https://codeql.github.com/codeql-query-help/codeql-cwe-coverage), and using custom CodeQL for additional vulnerability detection would be really helpful too, for both our apps and libraries.

- Adding fuzzing based testing to Termux APIs and libraries, but it may need to be restricted to a small set of APIs that are tested or with limited inputs, as there seems to be resource consumption issues, will have to research into how large projects use it.

- Look into adding Termux app version name, Android release version and other Termux specific runtime and build info into user agent used by `apt`/`pkg` commands when downloading packages from our repository servers with an opt out. Currently only Termux package and prefix build values are sent. This should give us info on the distribution of Termux/Android versions among users and can help us better gauge the security impact of vulnerabilities. It will also help us know the usage metrics of third party apps using Termux execution environment and packages when [Dynamic Variables](/{{- page.lang -}}/posts/general/2024/11/11/termux-selected-for-nlnet-ngi-mobifree-grant.html#dynamic-variables) support is added. Any user uniquely identifiable info will not be sent of course.

---

&nbsp;





## Thanks!

*The GitHub SOSF program has been the catalyst we needed to formalize our security procedures and its learnings have made us more aware of the many ideas and GitHub toolings we can use to improve the security of our project. - agnostic-apollo*

We want to thank the GitHub and Microsoft staff, especially from the GitHub Security Lab for sharing their knowledge and helping us grow, as well as all the [program funders](https://github.blog/open-source/maintainers/securing-the-supply-chain-at-scale-starting-with-71-important-open-source-projects/#h-help-us-make-open-source-more-secure-nbsp) for making the program possible. A big shout out to all the other projects that participated in the program as well, there has been a lot we were able to learn from each other, and help each other with!

---

&nbsp;
