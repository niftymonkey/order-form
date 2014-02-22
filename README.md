# Order Application
[![Build Status](https://travis-ci.org/niftymonkey/order-form.png?branch=master)](https://travis-ci.org/niftymonkey/order-form)  
Simple web-based application for ordering items.


## Live Demo
http://nifty-order-app.herokuapp.com/
> Note: Demo is running on Heroku free instance, so you may have to refresh for it to load.


## Motivation

### Real-world Need
This application is being built for a specific usecase (user).  It will change a lot over time.  It will start out as a simple form that can be used to email order to a set email address.  It will then evolve into a more "shopping cart" type workflow.  And lastly will likely end up being the centerpiece of a website for this user's business.

### Learning Experience
This is also intended to be a project that I can use to learn the technologies in the [MEAN stack][1] in a hands-on way.  As a result, things may change drastically over time as I learn better/faster/smarter ways of solving the software engineering problems I encounter when building this application.


## Contributing
Since this is intended to be a learning experience for me, I don't expect that anyone else will be running this application locally.  However, if you'd like to build, run, and test this application locally, here's what you'll need to do:

### Manual Dependencies
You will need to install the following manually as a starting point:

* [NodeJS][2] - server code and build platform  
* [MongoDB][3] - database used by server 
* Sass Compiler - Sass precompiler used while developing  
    - [Ruby][4] - Needed by compass/sass compiler
    - Sass gem - Type the following once Ruby is installed:
    ```
    gem install sass
    ```
    - Compass gem - Type the following once Sass is installed:
    ```
    gem install compass
    ```

### Get Started

#### Clone
```
git clone https://github.com/niftymonkey/order-form.git
cd order-form
```
#### Node Dependencies
This will install all of the base dependencies that are needed for the application and the build system
```
npm install
```
#### Bower Dependencies
This will install all of the front-end dependencies that are used in the Angular app.
```
bower install
```
#### Run the app
Among other things, this will build, start a watch on the source files, start a server, and launch your default browser to the app.  It will also auto-reload when you make changes to the source files.
```
grunt serve
```
#### Run the tests
If you want to run the tests, it's a simple command as well
```
grunt test
```
#### Misc Grunt Tasks
You can run the following and check the "Available Tasks" for a list of other tasks you can run on the command-line
```
grunt --help
```

[1]:http://www.mean.io/
[2]:http://nodejs.org/
[3]:http://www.mongodb.org/
[4]:https://www.ruby-lang.org/en/downloads/
