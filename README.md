# Autobahn Test

## Installation

### Crossbar.io

Follow this to install Crossbar

[http://crossbar.io/docs/Installation-on-Windows/](http://crossbar.io/docs/Installation-on-Windows/)

After that go to `server` directory and do the following:

1. `$ crossbar init`
2. change port of crossbar (9000 in example) in `.crossbar/config.json`
3. `$ crossbar start`

### Autobahn

Install `autobahn` and `when` with npm.

```sh
$ npm install --save autobahn when
```

## See it working

1. Open Browser and navigate to `client/index.html`
2. Start server by executing `server/server.js`

Your browser should now receive an event from the server.