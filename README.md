# Microfrontends - Intermediate Level

- [Description](#description)
- [Available Scripts](#available-scripts)

## Description

In a nutshell, a _microfrontend_ is a monolithic application divided into multiple, smaller apps. Each smaller app is responsible for a distinct feature of the whole application. This is particular useful for engineers that are looking for a way to scale frontend applications. In this way, multiple engineering teams can work in isolation, while each smaller app is both easier to understand and make changes to. We assume
you have the basic knowledge of how to set up a microfrontend application using webpack's. [Module Federation Plugin](https://webpack.js.org/plugins/module-federation-plugin/) (MFP). For an easy to
understand example, see [here](https://github.com/alfiomartini/micro-frontends-basic).

This microfrontend application is composed of four smaller apps: the _container_, i.e., the shell that
coordinates the whole applications, and its constituent microfrontend themselves: _marketing_, _auth_ and
_dashboard_. The container, marketing, and auth apps are built with \_React\*, while the dashboard is built with _Vue_.

These definitions are made with the help of webpack configuration files. For instance, here are the configuration files (development mode) for the [container](container/config/webpack.dev.js),
and for the [marketing](marketing/config/webpack.dev.js) app. You can find detailed explanations and lots of diagrams in the documentation slides [here](slides/microfrontends-intro.pdf).

---

## Available Scripts

Navigate to each directory, _container_, _marketing_, and run:

**npm start** (development mode)

To see the whole application working , open the browser at:

_localhost:8090_

To see the _marketing_ microfrontend running as a standalone app go to:

_localhost:8091_
