/*
 * grunt-jslocator
 * https://github.com/dagof/grunt-jslocator
 *
 * Copyright (c) 2015 dagof
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    jslocator: {
      default_options: {
        options: {
          fileName: 'myDefaultLocalJS', //will be myDefaultLocalJS.en.js
          source: 'test/fixtures/source.json',
          template: 'test/fixtures/template.js',
          open_varMark: '<%=',
          close_varMark: '%>'
        }
      },
      custom_options: {
        options: {
          fileName: 'myCustomLocalJS', //will be myCustomLocalJS.en.js
          source: 'test/fixtures/source.json',
          template: 'test/fixtures/template.js',
          open_varMark: '<%=',
          close_varMark: '%>'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'jslocator', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
