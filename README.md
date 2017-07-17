# Let’s build a Twubric!

### Tech stack

* AngularJS 1.5.8
* HTML5
* SASS
* gulp
* npm and bower

### Angular Conventions
* Followed component architecture
* Directive to add generic template code or DOM manipulation.
* Services to write the generic logic to set and get the data.
* Controllers have business logic and view binding code.
* Teardown the listeners before controllers are destroyed.

### To setup local environment
1. Run ```npm install```
2. Install Bower if not installed ```npm install bower -g```
3. Run ```bower install bower.json```
4. Select 2 (optional)

### Create the Build
```sh
$ gulp build:dev [Dev Build]
$ gulp build:prod [Production Build]
```

### Run Development Server
```sh
$ gulp server:dev
```

### Run Production Server
```sh
$ gulp server:prod
```

### JsHint Report
Console output
```sh
$ gulp jshint:console
```
Html file output
```sh
$ gulp jshint:html
```

