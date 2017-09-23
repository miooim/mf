# Money finder's Software Developer Programming Test

### Quick start

```bash
# clone repo
$ git clone https://github.com/miooim/mf

# change directory to your app
$ cd mf

# install the dependencies with npm
$ npm install

# start the client server
$ npm start

# start the server
$ npm start:api
```

go to [http://localhost:5080](http://localhost:5080) in your browser.

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Running the app](#running-the-app)
* [Credits](#credits)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Running the app

After you have installed all dependencies you can now run the app with:
The app consists of two parts, server and client

To run client part
```bash
npm start
```

To run server part
```bash
npm start:api
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:5080`.

# Credits
Built using a nice AngularJS boilerplate
```https://github.com/preboot/angularjs-webpack.git
```
