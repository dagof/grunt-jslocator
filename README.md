# grunt-jslocator

> Produces custom JavaScript files containing the JavaScript file template modified with replaced texts on the languages previously set. This is useful for websites having more than one languages and have to display dialogs or specific messages on the chosen language.


[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jslocator --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jslocator');
```

## The "jslocator" task

### Overview
In your project's Gruntfile, add a section named `jslocator` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  jslocator: {
    default_options:{
      options: {
          // Task-specific options go here.
          fileName: 'myDefaultLocalJS',
          source: 'test/fixtures/source.json',
          template: 'test/fixtures/template.js',
          open_varMark: '<%=',
          close_varMark: '%>'
      }
    }
  }
});
```

### Options

#### options.fileName
Type: `String`
Default value: `'myDefaultLocalJS'`

A string value that is used to do something with whatever.

#### options.source
Type: `JSON`
Default value: `'test/fixtures/source.json'`

A file containing JSON formated data. 

#### options.template
Type: `String`
Default value: `'test/fixtures/template.js'`

A file containing the js template with variables. 

#### options.open_varMark
Type: `String`
Default value: `'<%='`

Mark to denote variables to be replaced with data from source file. This goes at the beggining of the text to be replaced. You can use another mark of your preference.

#### options.close_varMark
Type: `String`
Default value: `'%>'`

Mark to denote variables to be replaced with data from source file. This goes at the end of the text to be replaced. You can use another mark of your preference. 

### Usage Examples

#### Default Options
In this example, the pluging will produce two JavaScripts: `myDefaultLocalJS.en.js` and `myDefaultLocalJS.fr.js`. Each file contains the template from the file `template.js` but the variables teplaced with correspondent value stored on the source file `source.json`. Theses variables can be easy identified because they are surrounded by the open and close marks.

```js
grunt.initConfig({
  jslocator: {
    default_options:{
      options: {
          fileName: 'myDefaultLocalJS',
          source: 'test/fixtures/source.json',
          template: 'test/fixtures/template.js',
          open_varMark: '<%=',
          close_varMark: '%>'
      }
    }
  }
});
```

#### Source file (JSON format) source.json

```json
{
  "locales": ["en", "fr"]
  ,"vars":{
    "param1":{
      "en": "param #1"
      ,"fr": "1r parametre"
    }
    ,"param2":{
      "en": "param #2"
      ,"fr": "2e parametre"
    }
    ,"param3":{
      "en": "param #3"
      ,"fr": "3e parametre"
    }
  }
}
```

#### Template file (JavaScript format) template.js

```js
/*
  TEMPLATE
*/
function foo(param1, param2){
  var msg = "";

  if (!isNaN(param1)){
    msg += "param1 <%=param1%>";
  }

  if (!isNaN(param2)){
    msg += "param2 <%=param2%>";
  }

  alert(msg + "<%=param3%>");

  return;
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 2015-02-19   v0.1.0   Initial release.

## License
Copyright (c) 2015 Dago Flores.
Licensed under the MIT license.

[grunt]: http://gruntjs.com/