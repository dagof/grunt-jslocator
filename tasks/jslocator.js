/*
 * grunt-jslocator
 * https://github.com/dagof/grunt-jslocator
 *
 * Copyright (c) 2015 dagof
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('jslocator', 'The best Grunt plugin ever.', function() {

    //options
    var options = this.options({});
    var source;

    //check if source file is there
    if (!grunt.file.exists(options.source)) {
      grunt.log.warn('Source file "' + options.source + '" not found.');
      //return false;
    } else {
      //return true;
      source = grunt.file.readJSON(options.source);
    }

    //load source file to get languages
    var locales = source.locales;
    var varList = source.vars;
    var content = "";
    var content_temp = "";
    var local, lang, re_key, _key, _value;
    var fileName = "";

    //load template
    content = grunt.file.read(options.template);

    //loop throw locales
    for (local in locales){
      content_temp = content;

      //loop throw vars
      for (var myVar in varList){
        //loop throw langs
        for (var myLang in varList[myVar]){
          try{
            if (myLang === locales[local]){
              //key
              _key = options.open_varMark + myVar + options.close_varMark;
              re_key = new RegExp(_key, 'g');
              //value
              _value = varList[myVar][myLang];

              //replace all occurrences with correspondent text
              content_temp = content_temp.replace(re_key, _value);
            }
          }
          catch(e){
            grunt.log.writeln(e);
          }
        }

        if (myVar === Object.keys(varList).length){
          break;
        }
      }

      //complete file path
      fileName = 'test/expected/' + options.fileName + '.' + locales[local] + '.js';

      // Write the destination file.
      grunt.file.write(fileName, content_temp);
      grunt.log.oklns("File "+ fileName +" created.");
    }
  });

};