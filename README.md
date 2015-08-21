# rabbit-pyramid

This project is an application skeleton for a typical Angular JS based retail store web app.
The entire motivation behind development of this web-app is to implement test pyramid and learn
web development.

The basic structure has copied from angular-seed project.

## Getting Started

To get you started you can simply clone the repo and install its dependencies.

### Prerequisites

You need git to clone the angular-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone rabbit-pyramid

Clone the repository using [git][git]:

```
git clone https://github.com/priyanshus/rabbit-pyramid
cd rabbit-pyramid
```

### Install Dependencies

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/#/mobile-list`.

### Run the Test
To run the test one can use below command:

```
npm test
```
Above command runs all the three layers of test only once.

During development of code,one can use below command to run the tests. 

```
npm run karma
```
